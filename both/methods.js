import { MessagesClient, MessagesSam, FormNeedSam , UserNote} from './collections'
import { check } from 'meteor/check'
import { Random } from 'meteor/random'
import { stringify } from 'querystring'

Meteor.methods({
    insertMessageClient(message) {
        check(message, {
            content: String
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let  messageDoc = {
            content: message.content,
            createdAt: new Date(),
            ownerId: this.userId
        }
        MessagesClient.insert(messageDoc)
    },

    insertMessageSam(message) {
        check(message, {
            content: String
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let  messageDoc = {
            content: message.content,
            createdAt: new Date(),
            ownerId: this.userId
        }
        MessagesSam.insert(messageDoc)
    },

    updateFbAccountSamOrNot(SamOrNot) {
        check(SamOrNot,{
            SamOrNot: String
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let  profile = {
            "profile.SamOrNot": SamOrNot.SamOrNot
        }
        Meteor.users.update({_id: this.userId}, {$set: profile})
    },

    updateFbAccountUsername(username){
        check(username,{
            username: String
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let  pseudo = {
            username: username.username
        }
        Meteor.users.update({_id: this.userId}, {$set: pseudo})
    },

    insertFormNeedSam(information) {
        check(information, {
            passager_number: String,  //attention le renvois du selecteur est une string or il est preferable d'avoir un nombre
            date: String, //pareil que le passager number attendu Date
            time: String,
            depart_address: String,
            depart_city: String,
            dest_address: String,
            dest_city: String,
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let Info = {
            passager_number: information.passager_number,
            date: information.date,
            time: information.time,
            depart_address: information.depart_address,
            depart_city: information.depart_city,
            dest_address: information.dest_address,
            dest_city: information.dest_city,
            createdAt: new Date(),
            ownerId: this.userId,
            ownerPseudo:Meteor.user().username
        }
        FormNeedSam.insert(Info)
    },

    updateMatch2(formId) {
        check(formId, {
            formId: String
        })
       let Id = formId.formId
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let matchInfo = {
            samId: this.userId,
            samPseudo:  Meteor.user().username
        }
        FormNeedSam.update({_id: Id}, {$set: matchInfo})
    },

    updateUserProfil(profil) {
        check(profil, {
            lastName: String,  
            firstName: String, 
            address: String,
            city: String,
            codePostal: String,
            username: String,
            tel: String,
            SamOrNot:String
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        // let newInfo = {
        let lastnameUpdate = {
            "profile.lastName": profil.lastName,
        }
        let firstNameUpdate = {
            "profile.firstName": profil.firstName,
        }
        let addressUpdate = {
            "profile.address": profil.address,
        }
        let cityUpdate = {
            "profile.city": profil.city,
        }

        let codePostalUpdate = {
            "profile.codePostal": profil.codePostal,
        }
        let editedAtUpdate = {
            "profile.editedAt": new Date(),
        }
        let telUpdate = {
            "profile.tel": profil.tel
        }
        let SamOrNotUpdate = {
            "profile.SamOrNot": profil.SamOrNot
        }
        // }
        // let  profilUpdate = {
        //     "profile": newInfo
        // }
        // let emailUpdate ={
        //     "emails.[0].adress": profil.emails
        // }
        let userNameUpdate ={
            "username": profil.username
        }
        
        // Meteor.users.update({_id: this.userId}, {$set: profilUpdate})
        if (profil.lastName){
            
            Meteor.users.update({_id: this.userId}, {$set: lastnameUpdate})
        }
        if (profil.firstName){
            Meteor.users.update({_id: this.userId}, {$set: firstNameUpdate})
        }
        if (profil.address){
            Meteor.users.update({_id: this.userId}, {$set: addressUpdate})
        }
        if (profil.city){
            Meteor.users.update({_id: this.userId}, {$set: cityUpdate})
        }
        if (profil.codePostal){
            Meteor.users.update({_id: this.userId}, {$set: codePostalUpdate})
        }
        if (profil.editedAt){
            Meteor.users.update({_id: this.userId}, {$set: editedAtUpdate})
        }
        if (profil.tel){
            Meteor.users.update({_id: this.userId}, {$set: telUpdate})
        }
        if (profil.username){
            Meteor.users.update({_id: this.userId}, {$set: userNameUpdate})
        }
        if (profil.SamOrNot){
            Meteor.users.update({_id: this.userId}, {$set: SamOrNotUpdate})
        }
    },
    updateVadidOrNot(valid) {
        check(valid, {
            vadidOrNot: String,
            formId: String
        })
    
       let Id = valid.formId
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let validation = {
            vadidOrNot: valid.vadidOrNot,
        }
        let killSam ={
            samId: '',
            samPseudo: ''
        }
        let courseCancel = {
            'canceled': true
        }

        if (valid.vadidOrNot == 'valider'){
        FormNeedSam.update({_id: Id}, {$set: validation})
        }
        else if(valid.vadidOrNot == 'refuser'){
        FormNeedSam.update({_id: Id}, {$set: killSam})
        }
        else{
        FormNeedSam.update({_id: Id}, {$set: courseCancel})
        }
    },

    updateLifeOrNot(valid) {
        check(valid, {
            lifeOrNot: String,
            formId: String
        })
    
       let Id = valid.formId
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let validation = {
            lifeOrNot: valid.lifeOrNot,
        }
        let killSam ={
            callPolice: 'true'
        }
        if (valid.lifeOrNot == 'yes'){
        FormNeedSam.update({_id: Id}, {$set: validation})
    }
    else if(valid.lifeOrNot == 'no')
    FormNeedSam.update({_id: Id}, {$set: killSam})
    },

    updateVomiOrNot(valid) {
        check(valid, {
            vomiOrNot: String,
            formId: String
        })
    
       let Id = valid.formId
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let validation = {
            vomiOrNot: valid.vomiOrNot,
        }
        let sendFlower ={
            sendFlower: 'true'
        }
        FormNeedSam.update({_id: Id}, {$set: validation})
     if(valid.vomiOrNot == 'yes')
    FormNeedSam.update({_id: Id}, {$set: sendFlower})
    },

    updateIsAdmin(youlou) {
        check(youlou, {
            setAdmin: String,
            userId1: String
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let Id = youlou.userId1
        let adminUpdate = {
            "profile.isAdmin": youlou.setAdmin
        }
     
            Meteor.users.update({_id: Id}, {$set: adminUpdate})
        
    },

    updateUserProfilByAdmin(adminSetUp){
        check(adminSetUp, {
            SamOrNot: String,
            samValid: String,
            userId: String,
            banned: String,
            // unBan: String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let Id = adminSetUp.userId
        let SamOrNotUpdate = {
            "profile.SamOrNot": adminSetUp.SamOrNot
        }
        let samValidUpdate = {
            "profile.samValid": adminSetUp.samValid
        }
        let bannedUpdate = {
            "profile.banned": adminSetUp.banned
        }
        // let unBanUpdate = {
        //     "profile.banned": adminSetUp.unBan
        // }
        if (adminSetUp.SamOrNot){
            Meteor.users.update({_id: Id}, {$set: SamOrNotUpdate})
        }
        if (adminSetUp.samValid){
            Meteor.users.update({_id: Id}, {$set: samValidUpdate})
        }
        if (adminSetUp.banned){
            Meteor.users.update({_id: Id}, {$set: bannedUpdate})
        }
        // if (adminSetUp.unBan){
        //     Meteor.users.update({_id: Id}, {$set: unBanUpdate})
        // }
        
    },
    updateUserProfilByAdmin2(adminSetUp){
        check(adminSetUp, {
            SamOrNot: String,
            userId: String,
            banned: String,
            // unBan: String
        })
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }
        let Id = adminSetUp.userId
        let SamOrNotUpdate = {
            "profile.SamOrNot": adminSetUp.SamOrNot
        }
        let bannedUpdate = {
            "profile.banned": adminSetUp.banned
        }
        // let unBanUpdate = {
        //     "profile.banned": adminSetUp.unBan
        // }
        if (adminSetUp.SamOrNot){
            Meteor.users.update({_id: Id}, {$set: SamOrNotUpdate})
        }
        
        if (adminSetUp.banned){
            Meteor.users.update({_id: Id}, {$set: bannedUpdate})
        }
        // if (adminSetUp.unBan){
        //     Meteor.users.update({_id: Id}, {$set: unBanUpdate})
        // }
        
    },
    updateNote(Note) {
        check(Note, {
            Note: Number,
            ownerPseudo: String
        })
    
        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let Pseudo = Note.ownerPseudo

        let sommeNotation = {
            "profile.sommeNote": Note.Note,
        }
        let numberNotation = {
            "profile.numberNote": (Note.Note / Note.Note)
        }

        if (Note.Note){
            Meteor.users.update({username: Pseudo}, {$inc: sommeNotation})
            Meteor.users.update({username: Pseudo}, {$inc: numberNotation})
        }

    },
    setNoteByPassager(note){check(note, {
        notePassager: String,
        formId: String,
    })
    
    let Id = note.formId
    if(!this.userId) {
        throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
    }
    let updateNotePassager = {
        notePassager: note.notePassager
    }
    if(note.notePassager)
    FormNeedSam.update({_id: Id}, {$set: updateNotePassager})
    },

    setNoteBySam(note){check(note, {
        noteSam: String,
        formId: String,
    })
    
    let Id = note.formId
    if(!this.userId) {
        throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
    }
    let updateNoteSam = {
        noteSam: note.noteSam
    }
    if(note.noteSam)
    FormNeedSam.update({_id: Id}, {$set: updateNoteSam})
    }
})



