import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './../form/form'
import './IAmSam.html'

Template.iam_sam.events({
    'click .js-goto-Iam-sam'(event, instance){
        FlowRouter.go('/formSam')
    }
})