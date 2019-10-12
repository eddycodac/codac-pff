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
        BlazeLayout.render('layout', { main: 'needSamForm' })
    }
})

FlowRouter.route('/sam_board_display',{
    action(){
        BlazeLayout.render('layout', { main: 'sam_board_display' })
    }
})

FlowRouter.route('/fbChooseProfile',{
    action(){
        BlazeLayout.render('layout', { main: 'fbChooseProfile' })
    }
})

FlowRouter.route('/bothView',{
    action(){
        BlazeLayout.render('layout', { main: 'bothView' })
    }
})

FlowRouter.route('/userProfil',{
    action(){
        BlazeLayout.render('layout', { main: 'userProfil' })
    }
})

FlowRouter.route('/otherUser',{
    action(){
        BlazeLayout.render('layout', { main: 'otherUser' })
    }
})

FlowRouter.route('/mesTrajets',{
    action(){
        BlazeLayout.render('layout', { main: 'mesTrajets' })
    }
})