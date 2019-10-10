import { Template } from 'meteor/templating'
import {FormNeedSam} from '../../../both/collections'


import './sam_board.html'
import { format } from 'url'
import { userInfo } from 'os'

Template.sam_board_display.helpers({
   request(){ 
       return FormNeedSam.find().fetch()
   }
  
})