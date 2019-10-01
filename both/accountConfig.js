T9n.setLanguage('fr')
AccountsTemplates.configure({showAddRemoveServices: true});
AccountsTemplates.configure({
    texts: {
        socialIcons: {
          google: "myGoogleIcon",
          "meteor-developer": "myMeteorIcon",
        }
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
]);