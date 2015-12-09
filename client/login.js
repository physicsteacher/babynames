Template.login.events({
  "submit .form-signin": function(event){
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function(err){
      if(err){
        event.target.email.value = email;
        event.target.password.value = password;
        FlashMessages.sendError(err.reason);
      } else {
        FlashMessages.sendSuccess("You are logged in");
        Router.go('/');
      }
    });

    return false;
  }
})
