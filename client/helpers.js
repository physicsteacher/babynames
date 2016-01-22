Meteor.subscribe("names");
Meteor.subscribe("allUsers");

Template.home.helpers({
  'names': function(){
    var userid = Meteor.userId();
    // this works: return BabyNames.find({liked: {$nin: [userid]}});
    return BabyNames.find({$and: [{liked: {$nin: [userid]}}, {disliked: {$nin: [userid]}}]});
  },
}
);

Template.matches.helpers({
  'mynames': function(){
    var email = Meteor.user().profile.partner;
    var user = Meteor.users.findOne({"profile.email": email});
    var userid = user._id;
    var myid = Meteor.userId();
    return BabyNames.find({$and: [{liked: userid}, {liked: myid}]});


  }
});

Template.partnersNames.helpers({
  'mynames': function(){
    var email = Meteor.user().profile.partner;
    var user = Meteor.users.findOne({"profile.email": email});
    var userid = user._id;
    return BabyNames.find({liked: userid});


  },
  'notmynames': function(){
    var email = Meteor.user().profile.partner;
    var user = Meteor.users.findOne({'profile.email': email});
    var userid = user._id;
    return BabyNames.find({disliked: userid});
  }
});

Template.myNames.helpers({
  'mynames': function(){
    var userid = Meteor.userId();
    return BabyNames.find({liked: userid});
  },
  'notmynames': function(){
    var userid = Meteor.userId();
    return BabyNames.find({disliked: userid});
  }
});

Template.home.events(
  {
    'click .dislike': function(){
      var userid = Meteor.userId();
      BabyNames.update(this._id, {$addToSet: {"disliked": userid}});
      FlashMessages.sendError("That name was added to your list of disliked names.");

    },
    'click .like': function(){
      var userid = Meteor.userId();
      BabyNames.update(this._id, {$addToSet: {"liked": userid}});
      FlashMessages.sendSuccess("That name was added to your list of liked names");
      }
  },

);

Template.myNames.events(
  {
    'click .dislike': function(){
      var userid = Meteor.userId();
      BabyNames.update(this._id, {$addToSet: {"disliked": userid}});
      FlashMessages.sendError("That name was added to your list of disliked names.");

    },
    'click .like': function(){
      var userid = Meteor.userId();
      BabyNames.update(this._id, {$addToSet: {"liked": userid}});
      FlashMessages.sendSuccess("That name was added to your list of liked names");
      }
  },

);

Template.addPartner.events({
  'submit .addPartner': function(event){
    var partner = event.target.partnertext.value;
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.partner": partner}});
    var email = event.target.email.value;
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.email": email}});
    FlashMessages.sendSuccess("Partner email added")
    Router.go('/partnersNames');
     event.preventDefault();


  }
});

Template.addName.events({
  'submit .addName': function(event){
    FlashMessages.sendSuccess("Name added to the list.")
  }
})
