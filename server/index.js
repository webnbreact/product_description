const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3003;

const {Listings} = require('../database/seedListing.js');
const {Amenities} = require('../database/seedDB.js');

// const db = require('../database/seedDB.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/rooms/:id/listings', (req, res) => {
  console.log(`id req query`, req.query);
  console.log(`id`, req.query.listingId);
  Listings.findOne({listingId: req.query.listingId})
    .then(data => {
      console.log('successfully fetched listing from db');
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('failed to fetch from db', err);
      res.status(404);
    });
});

// app.get('/rooms/:id/amenities', (req, res) => {
//   db.amenities.id.findOne();
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
