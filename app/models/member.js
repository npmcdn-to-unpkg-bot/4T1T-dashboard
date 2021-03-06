// load mongoose since we need it to define a model
  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var favHeroSchema = new Schema({
      position: String,
      name: String,
      degree: Number
  }, {_id: false});
  memberSchema = new Schema({
    name : {
      type : String,
      required : true
    },
    passwordHash: String,
    admin: Boolean,
    favouriteHeroes : [favHeroSchema],
    profilePicUrl: String,
    realName: String,
    country: String
    }, {
      collection : 'members'
  });

  module.exports = mongoose.model('Member', memberSchema);
