Meteor.publish("names", function(){
  return BabyNames.find();
});

Meteor.publish("allUsers", function(){
  return Meteor.users.find();
})
