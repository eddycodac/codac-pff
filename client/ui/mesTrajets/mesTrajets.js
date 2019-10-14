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
        let note = event.target.note.value
        let formId = event.target.formId.value

        if (note > 0 && note < 6 ) {
            Meteor.call('setNoteByPassager', {
                note: note,
                formId: formId
            },function(err, res){
                if(!err) {
                    event.target.note.value = ''
                }
            })
        }
    }

})



