import '../both'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

import './startup/router'
import './ui/layout/layout'

if (MediaStreamError.isDevelopment){
    window.FlowRouter = FlowRouter
}