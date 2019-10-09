import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './../form/form'
import './book_sam.html'

Template.book_sam.events({
    'click .js-goto-book-sam'(event, instance){
        FlowRouter.go('/formClient ')
    }
})