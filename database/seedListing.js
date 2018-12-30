const faker = require ('./faker.js');
const mongoose = require ('mongoose');
const URI = 'mongodb://localhost:27017/airbnb';
const connection = mongoose.connect(URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  autoIndex: true
})

const db = mongoose.connection;

db.dropCollection('listings', (err, results) => {
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

//for house listing
var listingSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  homeType: String,
  homeName: String,
  homeLocation: String,
  homeDescription: String,
  homeDescriptionMore: String
});

let Listings = mongoose.model('Listings', listingSchema);

var listingDescription = faker.forListing.map(key => {
  return {
    id: key.id,
    homeType: key.homeType,
    homeName: key.homeName,
    homeLocation: key.homeLocation,
    homeDescription: key.homeDescription,
    homeDescriptionMore: key.homeDescriptionMore
  };
});

let saveListings = (listingDescription) => {
  Listings.insertMany(listingDescription, (err, results) => {
    if (err) {
      console.log('Listings was not seeded',err);
    } else {
      console.log('Listings was successfully seeded');
    }
  });
};

saveListings(listingDescription);

module.exports = {Listings};
module.exports.connection = connection;