import './navbar.html'

Template.navbar.events({
    'click .js-open-log-modal'(event, instance){
        Modal.show('logModal')
    },
    'click .js-logout'(event, instance){
        Meteor.logout()
    }
})

Template.logModal.onCreated(function() {
    this.autorun(() =>{
        if(Meteor.userId()){
            Modal.hide('logModal')
        }
    })
})