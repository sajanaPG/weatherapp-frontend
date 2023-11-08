import axios from "axios";
import {apiKey, baseUrl} from '../Constants.js';
export const getWeather = async (city) => {    
    try {
        const response = await axios.get(`${baseUrl}?id=${city}&units=metric&appid=${apiKey}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}