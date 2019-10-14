import './admin_dashboard.html'

Template.adminDashboard.helpers({
    users() {
        return Meteor.users.find({}, {sort: {createdAt: -1}}).fetch()
    }
})

Template.adminDashboard.events({
    'submit .js-update-user-by-admin'(event, instance){
        event.preventDefault()
        let SamOrNot = event.target.SamOrNot.value
        let banned = event.target.banned.value
        // let unBan = event.target.unBan.value
        let userId = event.target.userId.value
        let samValid = event.target.samValid.value


        Meteor.call('updateUserProfilByAdmin', {
            SamOrNot: SamOrNot,
            samValid: samValid,
            userId: userId,
            banned: banned,
            // unBan: unBan
        }, function(err, res){
            if(!err) {
            event.target.SamOrNot.value = ''
            event.target.banned.value = ''
            event.target.unBan.value = ''
            event.target.userId.value = ''
            event.target.samValid.value = ''

            }    
        })   
    },
        
})