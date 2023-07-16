const { City } = require('./models/city');

class CityRepository {
  async createCity(cityData) {
    try {
      const city = await City.create(cityData);
      return city;
    } catch (error) {
      throw error;
    }
  }
}

module.exports=CityRepository();
