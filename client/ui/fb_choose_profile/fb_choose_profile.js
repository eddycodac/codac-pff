import { Template } from 'meteor/templating';
import './fb_choose_profile.html'

 
 Template.fbChooseProfile.events({
     'submit .js-insert-profile-info'(event, instance){
         event.preventDefault()
          
        let username = event.target.username.value
        let samOrNot = event.target.samOrNot.value
        //  Meteor.call('insertMessageClient', { content: content }, function(err, res) {
        //      if(!err) {
        //          event.target.content.value = ''
        //      }
        //  })
        let  pseudo = {
            "username": username
        }
        let  profile = {
            "profile.samOrNot": samOrNot
        }
        
        Meteor.users.update({_id: Meteor.userId()}, {$set: username})
        Meteor.users.update({_id: Meteor.userId()}, {$set: profile})

        
 
        event.target.username.value = ''
        event.target.samOrNot.value = ''
     }
 })