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

        let Info = {
            date: date,
            time: time,
            depart_address: depart_address,
            dest_address: dest_address,
            createdAt: new Date(),
            ownerId: Meteor.userId 
        }
        FormNeedSam.insert(Info)

        event.target.depart_address.value = ''
        event.target.dest_address.value = ''
        event.target.the_date.value = ''
        event.target.wakeup.value = ''
    }
})