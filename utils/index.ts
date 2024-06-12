export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '3cb604b405mshf995d13abb3c1c2p190d68jsnab455a173d13',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers
    });

    const result = await response.json();
    return result;

}