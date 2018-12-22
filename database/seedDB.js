const faker = require ('./faker.js');
const mongoose = require ('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
db.dropCollection('listings', 'amenities', (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log(null, results);
  }
});

db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function() {
  console.log('Connected to database "airbnb"');
});

//for product listing
var listingSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  homeType: String,
  placeDescription: String
});

let Listings = mongoose.model('Listings', listingSchema);

var lists = faker.forListing.map(key => {
  return {
    homeType: key.homeType,
    placeDescription: key.placeDescription
  };
});

let saveListings = (lists) => {
  // console.log(lists);
  Listings.insertMany(lists, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

saveListings(lists);

//for amenities
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

let Amenities = mongoose.model('Amenities', amenitiesSchema);

var amenitiesInfo = faker.forAmenities.map(key => {
  return {
    // id: {type: Number, unique: true},
    basic: key.basic,
    facilities: key.facilities,
    dining: key.dining,
    guestAccess: key.guestAccess,
    logistics: key.logistics,
    bedBath: key.bedBath,
    safetyFeatures: key.safetyFeatures,
    notIncluded: key.notInclude
  };
});

let saveAmenities = (amenitiesInfo) => {
  console.log(amenitiesInfo);
  Amenities.insertMany(amenitiesInfo, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

saveAmenities(amenitiesInfo);


// module.exports = mongoose.model('Listings', 'Amenities');
