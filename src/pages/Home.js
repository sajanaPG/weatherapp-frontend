import { useEffect, useState } from 'react';
import cities from '../cities.json'
import { getWeather } from '../services/ApiService';
import WeatherCard from '../components/WeatherCard';
import { Row, Col, Button } from 'react-bootstrap';

const Home = ({ setSelectedCity }) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const cityCodesArr = cities.List.map(city => city.CityCode);

        const fetchDataForCity = async (city) => {
            const cachedData = JSON.parse(localStorage.getItem(city));
            if (cachedData) {
                const timestamp = cachedData.timestamp;
                const currentTime = new Date().getTime();

                // Check if data is not older than 5 minutes
                if (currentTime - timestamp < 5 * 60 * 1000) {
                    return cachedData.data;
                } else {
                    localStorage.removeItem(city);
                }
            }
            //if data is not available in cached data
            const response = await getWeather(city);
            const data = await response.list;

            const newCachedData = { timestamp: new Date().getTime(), data};
            localStorage.setItem(city, JSON.stringify(newCachedData));

            return data;
        };

        const fetchWeatherForCities = async () => {
            const promises = cityCodesArr.map(city => fetchDataForCity(city));
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