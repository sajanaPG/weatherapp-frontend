import cities from './cities.json';

const cityCodesArr = cities.List.map(city => city.CityCode);

const dateTimeOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    month: 'short',
    day: 'numeric',
};

const timeOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
}

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = "http://api.openweathermap.org/data/2.5/group";

const colors = ["#378de7", "#6149cb", "#40b681", "#de934e", "#9c3939", "#33FFC8", "#F833FF", "#FF5733"];

export {cityCodesArr, dateTimeOptions, timeOptions, apiKey, baseUrl, colors}