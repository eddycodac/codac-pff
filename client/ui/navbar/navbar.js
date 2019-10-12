import './navbar.html'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'


Template.bottomNav.events({
    'click .js-open-log-modal'(event, instance){
        Modal.show('logModal')
    },
    'click .js-logout'(event, instance){
        Meteor.logout()
        FlowRouter.go('/')
    },
    'click .btn-go-to-profile'(event, instance){
        FlowRouter.go('/userProfil')
    }
})

Template.logModal.onCreated(function() {
    this.autorun(() =>{
        if(Meteor.userId()){
            Modal.hide('logModal')
            if (Session.get('redirection')) {
                FlowRouter.go(Session.get('redirection'))
                Session.set('redirection', undefined)
            }
        }
    })
})


