import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import {BlazeLayout} from 'meteor/kadira:blaze-layout'

FlowRouter.route('/test:Param',{
    action(){
        console.log("Route test!")
    }
})


FlowRouter.route('/',{
    action(){
        BlazeLayout.render('layout')
    }
})