const express = require ('express');
const router = express.Router ();
const fakeData = require ('./fakeData.js');

router.get ('/', (req, res) => {
  console.log ('posted');
  res.end ();
  //   res.end ();
});

module.exports = router;
