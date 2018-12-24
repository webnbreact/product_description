var faker = require('faker');

//number of listings
var totalNumber = 100;

//Helper Function
var getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

var forListing = [];
var spaces = ['Entire Place', 'Private Room', 'Hotel Room', 'Shared Room'];

for (var i = 0; i < totalNumber; i++) {
  forListing.push({
    listingId: i,
    homeType: spaces[getRandomInt(4)],
    placeDescription: faker.lorem.paragraph()
  });
}

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
}

module.exports = {forListing, forAmenities};