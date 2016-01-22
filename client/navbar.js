Template.navbar.events({
  "click .logout-btn": function(event){
    Meteor.logout(function(err){
      if(err){
        FlashMessages.sendError(err.reason);
      }
      else {
        FlashMessages.sendSuccess("You are now signed out");
        Router.go('/');
      }
    })
  },

  "click .navbar-nav li a": function(event){
    $(".navbar-collapse").collapse('hide');
  }
})
