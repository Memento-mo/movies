const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookmarkSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  id: Number,
  type: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('bookmarks', bookmarkSchema);