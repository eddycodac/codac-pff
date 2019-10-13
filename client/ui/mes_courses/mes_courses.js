import { Template } from 'meteor/templating'
import { FormNeedSam } from '../../../both/collections'
import './mes_courses.html'


Template.mesCourses.helpers({
    mesCourses() {
        return FormNeedSam.find().fetch()
    }
})

Template.mesCourses.events({
    'submit .js-valid-vomi'(event, instance){
        event.preventDefault()
        let vomiOrNot = event.target.vomiOrNot.value
        let formId = event.target.formId.value
        Meteor.call('updateVomiOrNot', {
            vomiOrNot: vomiOrNot,
            formId: formId
        },function(err, res){
            if(!err) {
            event.target.vomiOrNot.value = ''
            }
        })

    }
})
