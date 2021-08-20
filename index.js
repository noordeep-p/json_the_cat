const fetchBreedDescription = require("./breedFetcher");
const BreedName = process.argv[2];

fetchBreedDescription(BreedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
});