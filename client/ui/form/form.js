import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Messages} from '../../../both/collections'
import './form.html'

Template.form.onCreated(function helloOnCreated() {
    this.messages = new ReactiveVar(0);
  });
  
  Template.form.helpers({
   messages(){
       return Messages.find().fetch()
   }
  });

Template.form.events({
    'submit .js-insert-message'(event, instance){
        event.preventDefault()
         
        let content = event.target.content.value

        console.log(content)

        let  messageDoc = {
            content: content,
            createdAt: new Date()
        }
        Messages.insert(messageDoc)

        event.target.content.value = ''
    }
})