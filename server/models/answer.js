var mongoose = require('mongoose'), Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  unlikes: Number,
  _topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Answer', AnswerSchema);
