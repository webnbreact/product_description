var mongoose = require ('mongoose');
var fakegoose = require ('fakegoose');
mongoose.connect('mongod://localhost/listing');

var faker = require ('faker');

var db = mongoose.connection;
db.on('error', console.log.error.bind(console, 'connection error'));
db.once('open', function() {});

// var listingSchema = new mongoose.Schema({
//   id: {type: Number, unique: true},
//   placeDescription: string
// });

var amenitiesSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  basic: String,
  facilities: String,
  dining: String,
  guestAccess: String,
  logistics: String,
  bedBath: String,
  safetyFeatures: String,
  notIncluded: [String]
});

var listingSchema = new mongoose.Schema ({
  id: {type: Number, unique: true},
  placeDescription: {
    type: String,
    fake: 'lorem.paragraph'
  }
});

var amenitiesSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  basic: {
    type: String,
    fake: 'lorem.sentence'
  },
  facilities: {
    type: String,
    fake: 'lorem.sentence'
  },
  dining: {
    type: String,
    fake: 'lorem.sentence'
  },
  guestAccess: {
    type: String,
    fake: 'lorem.sentence'
  },
  logistics: {
    type: String,
    fake: 'lorem.sentence'
  },
  bedBath: {
    type: String,
    fake: 'lorem.sentence'
  },
  safetyFeatures: {
    type: String,
    fake: 'lorem.sentence'
  },
  notIncluded: [String]
});

// GET rooms/:roomid/listing
// GET rooms/:roomid/amenities

listingSchema.plugin(fakegoose);
amenitiesSchema.plugin(fakegoose);

module.exports = mongoose.model(listingSchema, amenitiesSchema)