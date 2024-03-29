import { Template } from 'meteor/templating'
import {FormNeedSam, Match} from '../../../both/collections'


import './sam_board.html'
import { format } from 'url'
import { userInfo } from 'os'

Template.sam_board_display.helpers({
   request(){ 
       return FormNeedSam.find({}, {sort: {createdAt: -1}}).fetch()
   },
   matchs(){ 
    return Match.find({}, {sort: {createdAt: -1}}).fetch()
}
  
})


Template.sam_board_display.events({
    'submit .js-keepUser'(event, instance){
        event.preventDefault()
        let formId = event.target.formId.value
        Meteor.call('updateMatch2', { formId: formId }, function(err, res){
            if(!err) {
                FlowRouter.go('/mesCourses') 
            }
         })
         
    }    
})