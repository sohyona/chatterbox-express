const express = require ('express');
const router = express.Router ();
const fakeData = require ('./fakeData.js');

router.get ('/classes/messages', (req, res) => {
  console.log ('get success');
  res.send (fakeData);
  res.end ();
});

router.post ('/classes/messages', (req, res) => {
  console.log ('post suceess');
  console.log (req.body);
  fakeData.results.push (req.body);
  res.end ();
});

module.exports = router;
