import { MessagesClient, MessagesSam, FormNeedSam } from './collections'
import { check } from 'meteor/check'
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

    updateUserProfil(profil) {
        check(profil, {
            lastName: String,  //attention le renvois du selecteur est une string or il est preferable d'avoir un nombre
            firstName: String, //pareil que le passager number attendu date
            address: String,
            city: String,
            codePostal: String,
            username: String,
            // emails: String,
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
        // if (profil.emails){
        //     Meteor.users.update({_id: this.userId}, {$set: emailUpdate})
        // }
        if (profil.username){
            Meteor.users.update({_id: this.userId}, {$set: userNameUpdate})
        }
    }
})
