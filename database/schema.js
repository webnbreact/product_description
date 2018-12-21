var mongoose = require ('mongoose');
mongoose.connect('mongod://localhost/listing');

var faker = require ('faker');

var db = mongoose.connection;
db.on('error', console.log.error.bind(console, 'connection error'));
db.once('open', function() {});

var listingSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  homeType: String,
  placeDescription: string
});

var amenitiesSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  basic: String,
  facilities: String,
  dining: String,
  guestAccess: String,
  logistics: String,
  bedBath: String,
  safetyFeatures: String,
  notIncluded: String
});


// GET rooms/:roomid/listing
// GET rooms/:roomid/amenities


module.exports = mongoose.model(listingSchema, amenitiesSchema);