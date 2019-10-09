import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {MessagesClient} from '../../../both/collections'
import {MessagesSam} from '../../../both/collections'
import './form.html'

// Template.form.onCreated(function helloOnCreated() {
//     this.messages = new ReactiveVar(0);
//   });
  
  Template.formClient.helpers({
   messages_client(){
       return MessagesSam.find().fetch()
   }
  });

Template.formClient.events({
    'submit .js-insert-message-client'(event, instance){
        event.preventDefault()
         
        let content = event.target.content.value

        let  messageDoc = {
            content: content,
            createdAt: new Date(),
            ownerId: Meteor.userId()
        }
        MessagesClient.insert(messageDoc)

        event.target.content.value = ''
    }
})

Template.formSam.helpers({
    messages_sam(){
        return MessagesClient.find().fetch()
    }
   });
 
 Template.formSam.events({
     'submit .js-insert-message-sam'(event, instance){
         event.preventDefault()
          
         let content = event.target.content.value
 
         let  messageDoc = {
             content: content,
             createdAt: new Date(),
             ownerId: Meteor.userId()
         }
         MessagesSam.insert(messageDoc)
 
         event.target.content.value = ''
     }
 })