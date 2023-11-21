const currentTime = new Date().getTime();
const cacheExpTime = 5 * 60 * 1000;

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
const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

const colors = ["#378de7", "#6149cb", "#40b681", "#de934e", "#9c3939", "#33FFC8", "#F833FF", "#FF5733"];

export { currentTime, cacheExpTime, dateTimeOptions, timeOptions, apiKey, baseUrl, colors }