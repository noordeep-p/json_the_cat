const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedId = breedName.substring(0,4);
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, (error, response, body) => {
    let desc = body && body.length !== 2 ? JSON.parse(body)[0].breeds[0].description : `Breed ${breedName} not found!`;
    callback(error, desc);
  });
};

module.exports = fetchBreedDescription;