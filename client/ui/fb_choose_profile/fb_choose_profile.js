import { Template } from 'meteor/templating';
import './fb_choose_profile.html'

 
 Template.fbChooseProfile.events({
     'submit .js-insert-profile-info'(event, instance){
         event.preventDefault()
          
        let username = event.target.username.value
        let SamOrNot = event.target.SamOrNot.value
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
        Meteor.call('updateFbAccountSamOrNot',{SamOrNot: SamOrNot}, function(err, res ){
            if(!err) {
                event.target.SamOrNot.value = ''
            }
        })
        
     }
 })

 Template.fbChooseProfile.onCreated(function() {
    this.autorun(() =>{
        if(Meteor.user().username){
            
                if (Meteor.user().profile.SamOrNot === "sam" ){
                    FlowRouter.go('/sam_board_display')
                }
                else if(Meteor.user().profile.SamOrNot === "passager" ){
                    FlowRouter.go('/needSamForm')
                }
                // else if(Meteor.user().profile.SamOrNot === "both" ){
                //     FlowRouter.go('/bothView')
                // }
            }
        })

})


