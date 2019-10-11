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
       
        
        
        // Meteor.users.update({_id: Meteor.userId()}, {$set: pseudo})
        Meteor.call('updateFbAccountUsername',{username: username}, function(err, res ){
            if(!err) {
                event.target.username.value = ''
            }
        }) 
        // Meteor.users.update({_id: Meteor.userId()}, {$set: profile})
        Meteor.call('updateFbAccountSamOrNot',{samOrNot: samOrNot}, function(err, res ){
            if(!err) {
                event.target.samOrNot.value = ''
            }
        })
        
     }
 })