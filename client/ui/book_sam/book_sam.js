import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './../form/form'
import './book_sam.html'
import '../navbar/navbar'

Template.book_sam.events({
    'click .js-goto-book-sam'(event, instance){
        if(Meteor.userId()) {
            FlowRouter.go('/formClient ')
        } else {
            Session.set('redirection', '/formClient')
            Modal.show('logModal')
        }
    }
})