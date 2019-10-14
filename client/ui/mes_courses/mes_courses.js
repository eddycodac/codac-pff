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

    },
    // 'submit .js-note-passager'(event, instance){
    //     event.preventDefault()
    //     let Note = Number(event.target.Note.value)
    //     let ownerPseudo = event.target.ownerPseudo.value
    //     Meteor.call('updateNote', {
    //         Note: Note,
    //         ownerPseudo: ownerPseudo
    //     },function(err, res){
    //         if(!err) {
    //         event.target.Note.value = ''
    //         event.target.ownerPseudo.value = ''
    //         }
    //     })
    // }
    'submit .js-note-sam'(event, instance){
        event.preventDefault()
        let noteSam = event.target.noteSam.value
        let formId = event.target.formId.value

        if (noteSam > 0 && noteSam < 6 ) {
            Meteor.call('setNoteBySam', {
                noteSam: noteSam,
                formId: formId
            },function(err, res){
                if(!err) {
                    event.target.noteSam.value = ''
                }
            })
        }
    }

})
