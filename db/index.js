const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true }).then(console.log('mongoose connected!'));
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo DB is running');
});

let overviewSchema = mongoose.Schema({
  propertyID: Number,
  type: String,
  area: Number,
  bedrooms: Number,
  sleeps: Number,
  bathrooms: Number,
  halfBaths: Number,
  minStay: Number,
  description: String
});

const overview = mongoose.model('overview', overviewSchema);

module.exports.overview = overview;
