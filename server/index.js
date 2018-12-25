const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003;

const {Listings} = require('../database/seedListing.js');
// const {Amenities} = require('../database/seedDB.js');

// const db = require('../database/seedDB.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/rooms/:id/listings', (req, res) => {
  // console.log(`this is req.params`, req.params.id);
  var listingId = req.params.id;
  return Listings.findOne({id: listingId})
    .then(data => {
      console.log('successfully fetched listing from db', data);
      res.status(200).send(JSON.stringify(data));
    })
    .catch(err => {
      console.log('failed to fetch from db', err);
      res.status(404);
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
