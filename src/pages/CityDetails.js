import { Row, Col } from "react-bootstrap";
import './CityDetails.css';
import { Link } from "react-router-dom";

const CityDetails = ({ selectedCity }) => {
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
        <div className="detcard">
            <div className="detcard-head">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                <div className="detcard-city">{selectedCity.name}, {selectedCity.sys.country}</div>
                <div className="detcard-date">{new Date(selectedCity.dt * 1000).toLocaleString('en-US', options)}</div>
                <Row className="mt-4">
                    <Col className="detcard-col">
                        <img alt="weather icon" src={`https://openweathermap.org/img/wn/${selectedCity.weather[0].icon}.png`} className="weather-icon" />
                        <div className="detcard-desc">{selectedCity.weather[0].description}</div>
                    </Col>

                    <Col>
                        <div className="detcard-temp">{selectedCity.main.temp}°c</div>
                        <div className="detcard-minmaxtemp">Temp Min: {selectedCity.main.temp_min}°c</div>
                        <div className="detcard-minmaxtemp">Temp Max: {selectedCity.main.temp_max}°c</div>
                    </Col>
                </Row>
            </div>

            <div className="detcard-body">
                <Row>
                    <Col className="detcard-body-col1">
                        <p>Pressure {selectedCity.main.pressure}hPa</p>
                        <p>Humidity {selectedCity.main.humidity}%</p>
                        <p>Visibility {selectedCity.visibility / 1000} km</p>
                    </Col>
                    <Col className="detcard-body-col2">
                        <img alt="wind-arrow" src={"icons/direction-arrow.png"} />
                        <p>{selectedCity.wind.speed}m/s {selectedCity.wind.deg} Degree</p>
                    </Col>
                    <Col className="detcard-body-col3">
                        <p>Sunrise: {new Date(selectedCity.sys.sunrise * 1000).toLocaleString('en-US', options2).toLowerCase()} </p>
                        <p>Sunset: {new Date(selectedCity.sys.sunset * 1000).toLocaleString('en-US', options2).toLowerCase()} </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CityDetails;