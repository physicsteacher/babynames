Schemas = {};

BabyNames = new Mongo.Collection('names');

BabyNames.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 20
  },

  gender: {
    type: String,
    allowedValues: ["Boy", "Girl", "Either"]
  },

  meaning: {
    type: String,
    max: 100
  },
  liked: {
    type: [String],
    optional: true
  },

  disliked: {
    type: [String],
    optional: true
  }
}));

BabyNames.allow({
  insert:function(userId,doc){
    return true;
  }
});
