const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookmarkSchema = new Schema({
  title: String,
  overview: String,
  img: String,
  id: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('bookmarks', bookmarkSchema);