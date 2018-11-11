const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true }).then(console.log('mongoose connected!'));
const mongoURI = 'mongodb+srv://steve:102884@su-casa-t1n9r.mongodb.net/fec';
mongoose.connect(mongoURI, { useNewUrlParser: true }).then(console.log('mongoose' +
  ' connected!'));
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo DB is connected and running @ ' + mongoURI);
});

let overviewSchema = mongoose.Schema({
  propertyID: Number,
  headline: String,
  location: String,
  type: String,
  area: Number,
  bedrooms: Number,
  sleeps: Number,
  bathrooms: Number,
  halfBaths: Number,
  minStay: Number,
  brief: String,
  description: String,
  owner: String,
  phone: String,
  amenities: Array,
  general: Array,
  kitchen: Array,
  entertainment: Array,
  notes: Array
});

const overview = mongoose.model('overview', overviewSchema);

module.exports.db = db;
module.exports.overview = overview;
