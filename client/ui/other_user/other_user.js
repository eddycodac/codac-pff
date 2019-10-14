import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import './other_user.html'
import { notEqual } from 'assert'

Template.otherUser.helpers({
    allUser(){
        return Meteor.users.findOne({_id: FlowRouter.getParam('otherUserId')})
    },
    // Note(){
    //     let NoteFinal = Meteor.users.findOne('_id': "current._id")
    // }
})

//---------------------- Afficher un rating star, non enregistré en bdd ---------------------

// Template.images.events({
// 	'click #js-rate-image':function() {
//         var star = document.getElementById('js-rate-image');
//         console.log("star.dataset.userrating");
//         // save en bdd
//         //
// 		var rating = star.dataset.userrating; // Gives you the value of the star selected for this instance
//         console.log(rating);
        
//        }
// });
