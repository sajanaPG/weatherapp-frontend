import { useEffect } from 'react';
import cities from '../cities.json'
import { getWeather } from '../services/ApiService';

const Home = () => {

   

    useEffect(() => {      
        
        const fetchWeather = async () => {
            const cityCodesArr = cities.List.map(city => city.CityCode);
            const response = await getWeather(cityCodesArr);
            console.log(response);
        }

        fetchWeather();
        
    }, []);

    return (
        <div>
            <h3>City List</h3>
            
        </div>
    )
}

export default Home;