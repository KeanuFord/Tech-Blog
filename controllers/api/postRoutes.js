const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Post Routes');
});

module.exports = router;