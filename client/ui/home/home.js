import './home.html'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.home.events({
    'click .js-open-log-modal'(event, instance){
        Modal.show('logModal')
    },
    'click .js-logout'(event, instance){
        Meteor.logout()
        FlowRouter.go('/')
    }
})

Template.logModal.onCreated(function() {
    this.autorun(() =>{
        if(Meteor.userId()){
            Modal.hide('logModal')
            if ( Meteor.user().username === undefined ){
                FlowRouter.go('/fbChooseProfile')
            }
            else{
                if (Meteor.user().profile.SamOrNot === "sam" ){
                    FlowRouter.go('/sam_board_display')
                }
                else if(Meteor.user().profile.SamOrNot === "passager" ){
                    FlowRouter.go('/needSamForm')
                }
                // else{
                //     FlowRouter.go('/bothView')
                // }
            }
        }
    })
})