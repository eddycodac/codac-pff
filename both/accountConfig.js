
T9n.setLanguage('fr')
AccountsTemplates.configure({
    showAddRemoveServices: true,
});


// AccountsTemplates.configure({
//     texts: {
//         socialIcons: {
//             "meteor-developer": "myMeteorIcon",
//         }
//     }
// });

Meteor.startup(function() {
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": "1591326821005895",
          "secret": "8a7ddd52767df72995b6b4eedd8cdd50"
        }
      },
      { upsert: true }
    );

    // Add Google configuration entry
   
    ServiceConfiguration.configurations.update(
        { "service": "google" },
        {
          $set: {
            "clientId": "917019176097-cl8qp923jnr1ak3s6p12m3ksuh969l2h.apps.googleusercontent.com",
            "secret": "QknvkezY-_W1zvWa2QGm2k-h"
          }
        },
        { upsert: true }
      );
});

AccountsTemplates.configure({
        texts: {
        socialSignUp: "signUp",
        socialSignIn: "signIn",
    }
});

let pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "Pseudo",
      placeholder:"Pseudo",
      required: true,
      minLength: 3,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  {
      _id: 'username_and_email',
      type: 'text',
      placeholder:"pseudo ou email",
      required: true,
      displayName: "Login",
  },
  pwd
])
AccountsTemplates.addField({
    _id: "SamOrNot",
    type: "select",
    displayName: "Sam ou Passager",
    select: [
        {
            text: "Les Deux",
            value: "both",
        },
        {
            text: "Sam",
            value: "sam",
        },
        {
            text: "Passager",
            value: "passager",
        },
        
    ],
});

AccountsTemplates.addField({
    _id: "accept_cgu",
    type: "checkbox",
    required: true,
    displayName: "J’accepte les conditions générales d’utilisation du service.",
    
});
