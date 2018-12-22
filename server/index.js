const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Listening on port ${port}`));

// GET rooms/:roomid/listing
// GET rooms/:roomid/amenities
