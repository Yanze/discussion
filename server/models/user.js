var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String,
  topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

// register schema as a model;
mongoose.model('User', UserSchema);
