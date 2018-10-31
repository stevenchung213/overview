const express = require('express');
const bodyParser = require('body-parser');
const {overview} = require('../db/index.js');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname + '/../public')));

app.get('/', (req, res) => {
  res.redirect('index.html')
});

app.get('/listings', (req, res) => {
  let getDbData = (callback) => {
    overview.find({}, (err, docs) => {
      if (err) {
        console.log('ERROR ERROR ERROR')
        callback(err, null);
      }
      console.log('GET REQUEST SERVED')
      callback(docs);
    });
  };
  getDbData(result => {
    console.log('sending db results')
    res.status(200).sendFile('index.html', {root: './public'});
  })
});

app.get('/listings/:propertyID', (req, res) => {
  console.log(req.params)
  let propID = req.params.propertyID;
  overview.find({propertyID: propID}).exec()
    .then(result => res.status(200).send(result))
    .catch(err => console.log('ERROR \n', err));
  // let getSpecificListing = (callback) => {
  //   overview.find({ propertyID: propID }, (err, doc) => {
  //     if (err) {
  //       console.log('ERROR @ SPECIFIC LISTING', err)
  //       callback(err, null)
  //     }
  //     console.log('GET @ SPECIFIC LISTING SERVED')
  //     callback(doc)
  //   });
  // };
  // getSpecificListing(result => {
  //   console.log('sending specific db result')
  //   res.sendfile('index.html', result);
  // })
});



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
