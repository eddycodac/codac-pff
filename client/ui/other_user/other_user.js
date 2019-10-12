import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './other_user.html'

Template.otherUser.helpers({
    allUser(){
        return Meteor.users.findOne({_id: FlowRouter.getParam('otherUserId')})
    }
})
