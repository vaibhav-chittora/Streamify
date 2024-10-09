import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_RAPID_API_URL,
    headers:{
        'x-rapidapi-key' : import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPID_API_HOST
    }
});

// console.log("API KEY --- ",import.meta.env.VITE_RAPID_API_KEY)