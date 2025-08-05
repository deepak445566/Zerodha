const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
  
  
    trim: true,
  },
 
}); // createdAt, updatedAt auto milta hai
UserSchema.plugin(passportLocalMongoose);
const Users = mongoose.model("user", UserSchema);

module.exports = Users;

