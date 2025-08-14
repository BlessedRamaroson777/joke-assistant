const express = require('express');
const router = express.Router();
const { getJoke } = require('../services/jokeService');

router.get('/', async (req, res) => {
  const category = req.query.category || 'Any';
  try {
    const joke = await getJoke(category);
    res.json(joke);
  } catch (err) {
    console.error(err);
    res.status(500).json({ joke: 'Impossible de récupérer la blague'});
  }
});

module.exports = router;
