const {CityRepository} =require('../repository/index');
class CityService{

    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
    try {
        const city =await this.CityRepository.createCity(data);
        
    } catch (error) {
        console.log("Something went wrong  at service layer");
        throw {error};
    }

    }

    async deleteCity(cityId){
        try {
           const response =await this.CityRepository.deleteCity(cityId);
        } catch (error) {
            console.log("Something went wrong  at service layer");
            throw {error};
        }
    
        }

        async updateCity(cityId,data){
            try {
              const response =await this.CityRepository.updateCity(cityId,data);
            } catch (error) {
                console.log("Something went wrong  at service layer");
                throw {error};
            }
            }


            async getCity(){
                try {
                const city = await this.CityRepository.getCity(cityId);
                return city;
                } catch (error) {
                    console.log("Something went wrong  at service layer");
                    throw {error};
                }
            
                }
}