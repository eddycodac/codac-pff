import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './other_user.html'

Template.otherUser.helpers({
    allUser(){
        return Meteor.users.findOne({_id: FlowRouter.getParam('otherUserId')})
    }
})

//---------------------- Afficher un rating star, non enregistré en bdd ---------------------

// Template.images.events({
// 	'click #js-rate-image':function() {
//         var star = document.getElementById('js-rate-image');
//         console.log("star.dataset.userrating");
// 		var rating = star.dataset.userrating; // Gives you the value of the star selected for this instance
//         console.log(rating);
        
//        }
// });
