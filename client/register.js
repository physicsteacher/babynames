Template.register.events({
  "submit .form-signup": function(event){
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;

    if(areValidPasswords(password, password2)){
        Accounts.createUser({
          email: email,
          password: password,
          profile: {
            email: email
          }
        }, function(err){
          if(err){
            FlashMessages.sendError("There was an error with your registration. Please try again.");
          } else {
            FlashMessages.sendSuccess("Account created, you are now logged in.");
            Router.go('/');
          }
        });
      }
    return false;
  },
});

//valid passwords
areValidPasswords = function (password, confirm){
  if (password !== confirm){
    FlashMessages.sendError("Passwords do not match");
    return false;
  }
  return true;
}
