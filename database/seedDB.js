// const faker = require ('./faker.js');
// const mongoose = require ('mongoose');
// // mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb://localhost:27017/airbnb', {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   autoIndex: true
// })
// const db = mongoose.connection;
// // mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
// db.dropCollection('listings', (err, results) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(null, results);
//   }
// });

// db.on('error', console.error.bind(console, 'Connection Error:'));
// db.once('open', function() {
//   console.log('Connected to database "airbnb"');
// });

// //for house listing
// var listingSchema = new mongoose.Schema({
//   listingId: {type: Number, unique: true},
//   homeType: String,
//   placeDescription: String
// });

// let Listings = mongoose.model('Listings', listingSchema);

// var listingDescription = faker.forListing.map(key => {
//   return {
//     // listingId: {type: Number, unique: true},
//     homeType: key.homeType,
//     placeDescription: key.placeDescription
//   };
// });

// let saveListings = (listingDescription) => {
//   Listings.insertMany(listingDescription, (err, results) => {
//     if (err) {
//       console.log('Listings was not seeded',err);
//     } else {
//       console.log('Listings was successfully seeded');
//     }
//   });
// };

// saveListings(listingDescription);

// //for amenities
// var amenitiesSchema = new mongoose.Schema({
//   amenitiesId: {type: Number, unique: true},
//   basic: String,
//   facilities: String,
//   dining: String,
//   guestAccess: String,
//   logistics: String,
//   bedBath: String,
//   safetyFeatures: String,
//   notIncluded: String
// });

// let Amenities = mongoose.model('Amenities', amenitiesSchema);

// var amenitiesDescription = faker.forAmenities.map(key => {
//   return {
//     // amenitiesId: {type: Number, unique: true},
//     basic: key.basic,
//     facilities: key.facilities,
//     dining: key.dining,
//     guestAccess: key.guestAccess,
//     logistics: key.logistics,
//     bedBath: key.bedBath,
//     safetyFeatures: key.safetyFeatures,
//     notIncluded: key.notIncluded
//   };
// });

// let saveAmenities = (amenitiesDescription) => {
//   Amenities.insertMany(amenitiesDescription, (err, results) => {
//     if (err) {
//       console.log('Amenities was not seeded', err);
//     } else {
//       console.log('Amenities was successfully seeded');
//     }
//   });
// };

// saveAmenities(amenitiesDescription);


// module.exports = mongoose.model('Listings', 'Amenities');

// module.exports = {Listings, Amenities};
