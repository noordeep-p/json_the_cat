const request = require('request');
const breed = process.argv.slice(2);
const searchBreed = breed[0].substring(0,4);

request(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchBreed}`, (error, response, body) => {
  if (error) return console.log(error);
  const data = JSON.parse(body);
  if (!data.length) {
    return console.log(`Breed: ${breed} is not found`);
  }  return console.log(data[0].breeds[0].description);
});