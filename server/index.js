const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));


app.get('/', (req, res) => {
  res.redirect('index.html');
});













let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});