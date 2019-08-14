const express = require ('express');
const app = express ();
const morgan = require ('morgan'); // print data logs
const fakeData = require ('./routes/fakeData.js');
const bodyParser = require ('body-parser');

app.use (bodyParser.urlencoded ({extended: false}));
app.use (express.static ('./public'));
app.use (morgan ('short'));

const router = require ('./routes/router.js');

app.use (router);

app.get ('/', (req, res) => {
  console.log ('responding to root route');
  res.send ('hello from rooooooot');
});

app.listen (3000, 'localhost', function () {
  console.log ('hello');
});
