const faker = require ('./faker.js');
const mongoose = require ('mongoose');
// mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/airbnb', {
  useCreateIndex: true,
  useNewUrlParser: true,
  // autoIndex: true
})
const db = mongoose.connection;
// mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
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
  placeDescription: String
});

let Listings = mongoose.model('Listings', listingSchema);

var listingDescription = faker.forListing.map(key => {
  return {
    id: key.id,
    homeType: key.homeType,
    placeDescription: key.placeDescription
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
