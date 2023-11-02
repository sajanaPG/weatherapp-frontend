import axios from "axios";

export const getWeather = async (cityCodesArr) => {
    const api = {
        key: "90c8c2462a9da495f14f1dae2c86f8b9",
        base: "http://api.openweathermap.org/data/2.5/group"
    }
    try {
        const response = await axios.get(`${api.base}?id=${cityCodesArr.join(',')}&units=metric&appid=${api.key}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}