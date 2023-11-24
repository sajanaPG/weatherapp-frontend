import { Row, Col } from "react-bootstrap";
import { useCity } from "../services/CityContext";
import { getWeather } from "../services/ApiService";
import { useEffect, useState } from "react";
import './CityDetails.css';
import {dateTimeOptions, timeOptions} from '../Constants';

const CityDetails = () => {
    const {selectedCity} = useCity();

    const [cityWeather, setCityWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getWeather(selectedCity);
            const newCachedData = { timestamp: new Date().getTime(), data: response };
            localStorage.setItem(selectedCity, JSON.stringify(newCachedData));
            setCityWeather(response);
        }
        fetchData();
    },[selectedCity])

    return (
        <>
            {cityWeather ? (
                <div className="detcard">
                    <>
                        <div className="detcard-head">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                            <div className="detcard-city">{cityWeather.name}, {cityWeather.sys.country}</div>
                            <div className="detcard-date">{new Date(cityWeather.dt * 1000).toLocaleString('en-US', dateTimeOptions)}</div>
                            <Row className="mt-4">
                                <Col className="detcard-head-col" sm={6}>
                                    <img alt="weather icon" src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`} className="weather-icon" />
                                    <div className="detcard-desc">{cityWeather.weather[0].description}</div>
                                </Col>

                                <Col>
                                    <div className="detcard-temp">{cityWeather.main.temp}°c</div>
                                    <div className="detcard-minmaxtemp">Temp Min: {cityWeather.main.temp_min}°c</div>
                                    <div className="detcard-minmaxtemp">Temp Max: {cityWeather.main.temp_max}°c</div>
                                </Col>
                            </Row>
                        </div>

                        <div className="detcard-body">
                            <Row>
                                <Col className="detcard-body-col1 order-lg-first" lg={true} sm={6} xs={6}>
                                    <p>Pressure {cityWeather.main.pressure}hPa</p>
                                    <p>Humidity {cityWeather.main.humidity}%</p>
                                    <p>Visibility {cityWeather.visibility / 1000} km</p>
                                </Col>
                                <Col className="detcard-body-col2 order-first" lg={true} md={12} sm={12} xs={12}>
                                    <img alt="wind-arrow" src={"icons/direction-arrow.png"} />
                                    <p>{cityWeather.wind.speed}m/s {cityWeather.wind.deg} Degree</p>
                                </Col>
                                <Col className="detcard-body-col3" lg={true} xs={4}>
                                    <p>Sunrise: {new Date(cityWeather.sys.sunrise * 1000).toLocaleString('en-US', timeOptions).toLowerCase()} </p>
                                    <p>Sunset: {new Date(cityWeather.sys.sunset * 1000).toLocaleString('en-US', timeOptions).toLowerCase()} </p>
                                </Col>
                            </Row>
                        </div>
                    </>
                </div>
            ) : (
                <div className="noCity">
                    <h3> No city has been selected </h3>
                    <a href="/">Go to Home page</a>
                </div>
            )}
        </>
    )
}

export default CityDetails;