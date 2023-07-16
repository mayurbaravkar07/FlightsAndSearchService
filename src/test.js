const  City = require('../models/city');
const CityRepository = require('../repository/cityRepository');

async function insertCity(cityData) {
  try {
    const cityRepo = new CityRepository();
    const city = await cityRepo.createCity(cityData);
    console.log('City inserted:', city);
  } catch (error) {
    console.error('Error inserting city:', error);
  }
}

// Example usage
const cityData = {
  name: 'New York',
};

insertCity(cityData);
