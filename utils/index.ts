
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3cb604b405mshf995d13abb3c1c2p190d68jsnab455a173d13',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};



try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}