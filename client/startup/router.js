import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import {BlazeLayout} from 'meteor/kadira:blaze-layout'

FlowRouter.route('/',{
    action(){
        BlazeLayout.render('layout', { main: 'home' })
    }
})

FlowRouter.route('/form',{
    action(){
        BlazeLayout.render('layout', { main: 'form' })
    }
})