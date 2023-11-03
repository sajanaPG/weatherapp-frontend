import { useEffect, useState } from 'react';
import cities from '../cities.json'
import { getWeather } from '../services/ApiService';
import WeatherCard from '../components/WeatherCard';
import { Row, Col,  Button } from 'react-bootstrap';

const Home = ({setSelectedCity}) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {

        const fetchWeather = async () => {
            const cityCodesArr = cities.List.map(city => city.CityCode);
            const response = await getWeather(cityCodesArr);
            setWeatherData(response.list);
        }

        fetchWeather();

    }, []);

    return (
        <div>
            <div className='add-city'>
                <input placeholder='Enter a city' className='city-input'/>
                <span> <Button>Add City</Button> </span>
            </div>
            <Row>
                {weatherData && weatherData.map((cityWeather, index) => {
                    return (
                        <Col lg={6} className='mb-5' key={index}>
                            <WeatherCard cityWeather={cityWeather} setSelectedCity={setSelectedCity} />
                        </Col>
                    )
                })}
            </Row>

        </div>
    )
}

export default Home;