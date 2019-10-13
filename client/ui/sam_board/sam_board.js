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
    'click .js-keepUser'(event, instance){
        Meteor.call('updateMatch')
        
    }    
})