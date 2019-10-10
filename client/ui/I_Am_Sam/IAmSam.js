import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './../form/form'
import './IAmSam.html'
import '../navbar/navbar'

Template.iam_sam.events({
    'click .js-goto-Iam-sam'(event, instance){
        if(Meteor.userId()) {
            FlowRouter.go('/formSam')
        } else {
            Session.set('redirection', '/formClient')
            Modal.show('logModal')
        }
    }
})