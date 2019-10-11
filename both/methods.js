import { MessagesClient, MessagesSam } from './collections'
import { check } from 'meteor/check'

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
    }

})