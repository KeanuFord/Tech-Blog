const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Comment Routes');
});

module.exports = router;