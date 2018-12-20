var mongoose = require ('mongoose');
var faker = require('faker');

//number of listings
var totalNumber = 99;

//Helper Function
var getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

var forListing = [];

var space = ['Entire Place', 'Private Room', 'Hotel Room', 'Shared Room'];
for (var i = 0; i < totalNumber; i++) {
  forListing.push({
    homeType: space[getRandomInt(4)],
    placeDescription: faker.lorem.paragraph()
  });
}

var forAmenities = [];

for (var i = 0; i < totalNumber; i++) {
  forAmenities.push({
    basic: [faker.lorem.word()],
    facilities: [faker.lorem.word()],
    dining: [faker.lorem.word()],
    guestAccess: [faker.lorem.word()],
    logistics: [faker.lorem.word()],
    bedBath: [faker.lorem.word()],
    safetyFeatures: [faker.lorem.word()],
    notIncluded: [faker.lorem.word(), faker.lorem.word()]
  });
}

console.log(forAmenities);
// console.log(forListing);

// module.exports = {

// }