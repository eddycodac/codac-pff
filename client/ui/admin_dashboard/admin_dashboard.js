import './admin_dashboard.html'

Template.adminDashboard.helpers({
    users() {
        return Meteor.users.find({}, {sort: {createdAt: -1}}).fetch()
    }
})

// Template.superAdminPanel.helpers({
//     users2() {
//         return Meteor.users.find({}, {sort: {createdAt: -1}}).fetch()
//     }
// })



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
            event.target.samValid.value = ''

            }    
        })   
    },
    'submit .js-form-set-admin'(event, instance){
        event.preventDefault()

        let setAdmin = event.target.setAdmin.value 
        let userId1 = event.target.userId1.value

        Meteor.call('updateIsAdmin', {
            setAdmin: setAdmin,          
            userId1: userId1
            // unBan: unBan
        }, function(err, res){
            if(!err) {
                event.target.setAdmin.value = ''    
            }    
        })   
    },
    'submit .js-update-user-by-admin2'(event, instance){
        event.preventDefault()
        let SamOrNot = event.target.SamOrNot2.value
        let banned = event.target.banned2.value
        // let unBan = event.target.unBan.value
        let userId = event.target.userId2.value


        Meteor.call('updateUserProfilByAdmin2', {
            SamOrNot: SamOrNot,
            userId: userId,
            banned: banned,
            // unBan: unBan
        }, function(err, res){
            if(!err) {
            event.target.SamOrNot.value = ''
            event.target.banned.value = ''
            event.target.unBan.value = ''

            }    
        })   
    },
})

// Template.superAdminPanel.events({
//     'submit .js-form-set-admin'(event, instance){
//         event.preventDefault()

//         let setAdmin = event.target.setAdmin.value
//         let userId1 = event.target.userId1.value

//         Meteor.call('updateIsAdmin', {
//             setAdmin: setAdmin,          
//             userId1: userId1
//             // unBan: unBan
//         }, function(err, res){
//             if(!err) {
//                 event.target.userId1.value = ''     

//             }    
//         })   
//     }
// })