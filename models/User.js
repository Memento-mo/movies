const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  avatar: Buffer
})

// userSchema.methods.toJSON = function() {
//   const user = this;

//   const userObject = user.toObject();

//   delete userObject.avatar;

//   return userObject;
// }

mongoose.model('users', userSchema)