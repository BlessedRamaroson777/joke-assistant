const axios = require('axios');

async function getJoke(category = 'Any') {
  try {
    // Récupération de la blague en anglais
    const jokeResp = await axios.get(
    //   `https://v2.jokeapi.dev/joke/${category}`
      `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
    );

    let jokeText = '';
    if (jokeResp.data.type === 'single') {
      jokeText = jokeResp.data.joke;
    } else {
      jokeText = `${jokeResp.data.setup} ${jokeResp.data.delivery}`;
    }

    return { joke: jokeText };
  } catch (err) {
    return { joke: 'Impossible de récupérer la blague'};
  }
}

module.exports = { getJoke };
