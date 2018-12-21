var faker = require('faker');

//number of listings
var totalNumber = 100;

//Helper Function
var getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

var generateForListing = () => {
  var forListing = [];

  var space = ['Entire Place', 'Private Room', 'Hotel Room', 'Shared Room'];

  for (var i = 0; i < totalNumber; i++) {
    forListing.push({
      homeType: space[getRandomInt(4)],
      placeDescription: faker.lorem.paragraph()
    });
  return forListing;
};

var generateForAmenities = () => {
  var forAmenities = [];

  for (var i = 0; i < totalNumber; i++) {
    forAmenities.push({
      basic: faker.lorem.words(),
      facilities: faker.lorem.words(),
      dining: faker.lorem.words(),
      guestAccess: faker.lorem.words(),
      logistics: faker.lorem.words(),
      bedBath: faker.lorem.words(),
      safetyFeatures: faker.lorem.words(),
      notIncluded: faker.lorem.words()
    });
  return forAmenities;
};

// console.log(forAmenities);
// console.log(forListing);

module.exports = 
 { generateForListing, 
  generateForAmenities }
