import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { FormNeedSam } from '../../../both/collections'
import './mesTrajets.html'

Template.mesTrajets.helpers({
    mesTrajets() {
        return FormNeedSam.find().fetch()
    }
})

