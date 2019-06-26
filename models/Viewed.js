const mongoose = require('mongoose');
const { Schema } = mongoose;

const viewedSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  id: Number,
  type: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('viewed', viewedSchema);