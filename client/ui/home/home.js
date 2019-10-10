import './home.html'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './../book_sam/book_sam'
import './../I_Am_Sam/IAmSam'

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
            if (Session.get('redirection')) {
                FlowRouter.go(Session.get('redirection'))
                Session.set('redirection', undefined)
            }
        }
    })
})