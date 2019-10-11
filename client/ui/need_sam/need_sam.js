import { Template } from 'meteor/templating'

import {FormNeedSam} from '../../../both/collections'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './need_sam.html'

Template.needSamForm.events({
    'submit .js-create-demand'(event,instance){
        event.preventDefault()
        const depart_address = event.target.depart_address.value
        const dest_address = event.target.dest_address.value
        const date = event.target.the_date.value
        const time = event.target.wakeup.value
        const depart_city = event.target.depart_city.value
        const dest_city = event.target.dest_city.value
        const passager_number = event.target.passager_number.value
         
        
        Meteor.call('insertFormNeedSam', {
            passager_number: passager_number,
            date: date,
            time: time,
            depart_address: depart_address,
            depart_city: depart_city,
            dest_address: dest_address,
            dest_city: dest_city,

        }, function(err, res ){
            if(!err) {
                event.target.depart_address.value = ''
                event.target.dest_address.value = ''
                event.target.the_date.value = ''
                event.target.wakeup.value = ''
                event.target.dest_city.value= ''
                event.target.depart_city.value = ''
                event.target.passager_number.value= ''            }
        }) 
    }
})