const mongoose = require('mongoose');

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('MongoDB connected successfully!');
});