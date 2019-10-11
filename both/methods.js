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

    updateFbAccountSamOrNot(samOrNot) {
        check(samOrNot,{
            samOrNot: String
        })

        if(!this.userId) {
            throw new Meteor.Error('not-connected', 'Veuillez d\'abord vous connecté')
        }

        let  profile = {
            "profile.samOrNot": samOrNot.samOrNot
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
    }
})
