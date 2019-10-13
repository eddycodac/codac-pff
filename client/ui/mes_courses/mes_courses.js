import { Template } from 'meteor/templating'
import { FormNeedSam } from '../../../both/collections'
import './mes_courses.html'


Template.mesCourses.helpers({
    mesCourses() {
        return FormNeedSam.find().fetch()
    }
})
