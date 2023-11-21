import { useEffect, useState } from 'react';
import { getWeather } from '../services/ApiService';
import WeatherCard from '../components/WeatherCard';
import { Row, Col, Button } from 'react-bootstrap';
import { currentTime, cacheExpTime } from '../Constants';
import cities from '../cities.json';

const Home = ({ setSelectedCity }) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {        
        const fetchDataForCity = async (city) => {
            const cachedData = JSON.parse(localStorage.getItem(city));
            if (cachedData) {
                const timestamp = cachedData.timestamp;

                // Check if data is not older than cache expiration time
                if (currentTime - timestamp < cacheExpTime) {
                    return cachedData.data;
                }
            }
            //if data is not available in cached data
            const response = await getWeather(city);

            const newCachedData = { timestamp: currentTime, response};
            localStorage.setItem(city, JSON.stringify(newCachedData));

            return response;
        };

        const fetchWeatherForCities = async () => {
            const promises = cities.List.map(city => fetchDataForCity(city.CityCode));
            const cityWeatherData = await Promise.all(promises);
            const updatedWeatherData = [].concat(...cityWeatherData);
            setWeatherData(updatedWeatherData);
        };

        fetchWeatherForCities();
    }, []);

    return (
        <div>
            <div className='add-city'>
                <input placeholder='Enter a city' className='city-input' />
                <span> <Button>Add City</Button> </span>
            </div>
            <Row>
                {weatherData.length > 0 ? weatherData.map((cityWeather, index) => {
                    return (
                        <Col lg={6} className='mb-5' key={index}>
                            <WeatherCard cityWeather={cityWeather} setSelectedCity={setSelectedCity} />
                        </Col>
                    )
                })
            : <h3>Something Went Wrong</h3>}
            </Row>

        </div>
    )
}

export default Home;