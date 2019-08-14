const express = require ('express');
const app = express ();
const morgan = require ('morgan'); // print data logs
const fakeData = require ('./routes/fakeData');
const bodyParser = require ('body-parser');

app.use (bodyParser.urlencoded ({extended: false}));
app.use (express.static ('./public'));
app.use (morgan ('short'));

const router = express.Router ();

router.get ('/', (req, res) => {
  console.log ('connection success');
  res.send ('Hello');
  //   res.end ();
});

app.listen (3000, () => {
  console.log ('server is up and listening on 3000');
});
