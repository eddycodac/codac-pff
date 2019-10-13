import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { FormNeedSam } from '../../../both/collections'
import './mesTrajets.html'

Template.mesTrajets.helpers({
    mesTrajets() {
        return FormNeedSam.find({}, {sort: {createdAt: -1}}).fetch()
    }
})

Template.mesTrajets.events({
    'submit .js-valid-traject'(event, instance){
        event.preventDefault()
        let vadidOrNot = event.target.vadidOrNot.value
        let formId = event.target.formId.value
        Meteor.call('updateVadidOrNot', {
            vadidOrNot: vadidOrNot,
            formId: formId
        },function(err, res){
            if(!err) {
               event.target.vadidOrNot.value = ''
            }
        })
    }
})

