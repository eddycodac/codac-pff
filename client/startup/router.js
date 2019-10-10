import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import {BlazeLayout} from 'meteor/kadira:blaze-layout'

FlowRouter.route('/',{
    action(){
        BlazeLayout.render('layout', { main: 'home' })
    }
})

FlowRouter.route('/formClient',{
    action(){
        BlazeLayout.render('layout', { main: 'formClient' })
    }
})

FlowRouter.route('/formSam',{
    action(){
        BlazeLayout.render('layout', { main: 'formSam' })
    }
})

FlowRouter.route('/needSamForm',{
    action(){
        BlazeLayout.render('layout', { main: 'needSam' })
    }
})