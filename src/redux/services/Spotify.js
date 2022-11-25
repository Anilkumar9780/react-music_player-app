import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5',
  },
  headers: {
    'X-RapidAPI-Key': 'a283a05a08msh9d308b1722a9246p1270fcjsn7681f15658ad',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  },
};

axios.request(options).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
