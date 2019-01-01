// const faker = require ('./faker.js');
// const mongoose = require ('mongoose');
// const URI = 'mongodb://localhost:27017/airbnb';
// const connection = mongoose.connect(URI, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   autoIndex: true
// })

// const db = mongoose.connection;

// db.dropCollection('amenities', (err, results) => {
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


// //for amenities
// var amenitiesSchema = new mongoose.Schema({
//   id: {type: Number, unique: true},
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
//     id: key.id,
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


// module.exports = {Amenities};
// module.exports.connection = connection;
