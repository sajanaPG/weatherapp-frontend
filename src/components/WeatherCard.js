import { Row, Col } from "react-bootstrap";

const WeatherCard = ({ cityWeather }) => {

    const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        month: 'short',
        day: 'numeric',
    };

    const options2 = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }

    return (
        <div className="cards">
            <div className="card-head">

                <Row>
                    <Col>
                        <div className="card-city">{cityWeather.name}, {cityWeather.sys.country}</div>
                        <div className="card-date">{new Date(cityWeather.dt * 1000).toLocaleString('en-US', options)}</div>
                        <div className="card-row">
                            <img alt="weather icon" src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`} />
                            <div className="card-desc">{cityWeather.weather[0].description}</div>
                        </div>
                    </Col>

                    <Col>
                        <div className="card-temp">{cityWeather.main.temp}°c</div>
                        <div className="card-minmaxtemp">Temp Min: {cityWeather.main.temp_min}°c</div>
                        <div className="card-minmaxtemp">Temp Max: {cityWeather.main.temp_max}°c</div>
                    </Col>
                </Row>
            </div>

            <div className="card-body">
                <Row>
                    <Col className="card-body-col1">
                        <p>Pressure {cityWeather.main.pressure}hPa</p>
                        <p>Humidity {cityWeather.main.humidity}%</p>
                        <p>Visibility {cityWeather.visibility / 1000} km</p>
                    </Col>
                    <Col className="card-body-col2">
                        <img alt="wind-arrow" src={"icons/direction-arrow.png"} />
                        <p>{cityWeather.wind.speed}m/s {cityWeather.wind.deg} Degree</p>
                    </Col>
                    <Col className="card-body-col3">
                        <p>Sunrise: {new Date(cityWeather.sys.sunrise * 1000).toLocaleString('en-US', options2).toLowerCase()} </p>
                        <p>Sunset: {new Date(cityWeather.sys.sunset * 1000).toLocaleString('en-US', options2).toLowerCase()} </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WeatherCard;