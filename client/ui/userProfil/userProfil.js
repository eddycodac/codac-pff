import { Template } from 'meteor/templating'
import './userProfil.html'

Template.userProfil.events({
    'submit .js-update-user-profil'(event, instance){
        event.preventDefault()
        let lastName = event.target.lastName.value
        let firstName = event.target.firstName.value
        let address = event.target.address.value
        let city = event.target.city.value
        let codePostal = event.target.codePostal.value
        let username = event.target.username.value
        let tel = event.target.tel.value

        Meteor.call('updateUserProfil', {
            lastName: lastName,
            firstName: firstName,
            address: address,
            city: city,
            codePostal: codePostal,
            username: username,
            tel: tel,
        }, function(err, res){
            if(!err) {
                event.target.lastName.value = ''
                event.target.firstName.value = ''
                event.target.address.value = ''
                event.target.city.value = ''
                event.target.codePostal.value= ''
                event.target.username.value= ''
                event.target.tel.value= ''

            }    
        })
    }
})



