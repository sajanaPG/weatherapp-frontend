import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCity } from "../services/CityContext";
import {dateTimeOptions, timeOptions, colors} from '../Constants'

const WeatherCard = ({ cityWeather }) => {
    const navigate = useNavigate();
    const {setCity} = useCity();

    const hancleCardClick = (cityWeather) => {
        setCity(cityWeather);
        localStorage.setItem("selectedCity", JSON.stringify(cityWeather));
        navigate('/cityDetails');
    };    

    return (        
        <div className="cards" onClick={()=> hancleCardClick(cityWeather)}>
            <div className="card-head" style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
                <button className="card-btn-close">&times;</button>
                <Row>
                    <Col>
                        <div className="card-city">{cityWeather.name}, {cityWeather.sys.country}</div>
                        <div className="card-date">{new Date(cityWeather.dt * 1000).toLocaleString('en-US', dateTimeOptions)}</div>
                        <div className="card-row">
                            <img alt="weather icon" src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`} />
                            <div className="card-desc">{cityWeather.weather[0].description}</div>
                        </div>
                    </Col>

                    <Col>
                        <div className="card-temp">{(cityWeather.main.temp.toFixed(0))}°c</div>
                        <div className="card-minmaxtemp">Temp Min: {cityWeather.main.temp_min}°c</div>
                        <div className="card-minmaxtemp">Temp Max: {cityWeather.main.temp_max}°c</div>
                    </Col>
                </Row>
            </div>

            <div className="card-body">
                <Row>
                    <Col className="card-body-col1 order-lg-first order-md-first order-sm-first" lg={true} md={true} sm={true} xs={6}>
                        <p>Pressure: {cityWeather.main.pressure}hPa</p>
                        <p>Humidity: {cityWeather.main.humidity}%</p>
                        <p>Visibility: {(cityWeather.visibility / 1000).toFixed(1)} km</p>
                    </Col>
                    <Col className="card-body-col2 order-first" lg={true} md={true} sm={true} xs={12}>
                        <img alt="wind-arrow" src={"icons/direction-arrow.png"} />
                        <p>{(cityWeather.wind.speed).toFixed(1)}m/s {cityWeather.wind.deg} Degree</p>
                    </Col>
                    <Col className="card-body-col3" lg={true} md={true} sm={true} xs={6}>
                        <p>Sunrise: {new Date(cityWeather.sys.sunrise * 1000).toLocaleString('en-US', timeOptions).toLowerCase()} </p>
                        <p>Sunset: {new Date(cityWeather.sys.sunset * 1000).toLocaleString('en-US', timeOptions).toLowerCase()} </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WeatherCard;