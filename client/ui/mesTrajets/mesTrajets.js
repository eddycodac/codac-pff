import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { FormNeedSam, UserNote } from '../../../both/collections'
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
    },
    'submit .js-valid-life'(event, instance){
        event.preventDefault()
        let lifeOrNot = event.target.lifeOrNot.value
        let formId = event.target.formId.value
        Meteor.call('updateLifeOrNot', {
            lifeOrNot: lifeOrNot,
            formId: formId
        },function(err, res){
            if(!err) {
               event.target.lifeOrNot.value = ''
            }
        })
    },
    'submit .js-note'(event, instance){
        event.preventDefault()
        let notePassager = event.target.notePassager.value
        let formId = event.target.formId.value

        if (notePassager > 0 && notePassager < 6 ) {
            Meteor.call('setNoteByPassager', {
                notePassager: notePassager,
                formId: formId
            },function(err, res){
                if(!err) {
                    event.target.notePassager.value = ''
                }
            })
        }
    }

})



