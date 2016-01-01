var mongoose = require('mongoose'), Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

// register schema as a model;
mongoose.model('Topic', TopicSchema);
