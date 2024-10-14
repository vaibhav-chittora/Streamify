import { axiosInstance } from '../helpers/axiosInstance';

export async function fetchNewMovies() {
    try {
        const response = await axiosInstance.get('/home');
        console.log(response.data[1]);
        return response.data[1].movies;
    } catch (error) {
        console.log(error);
        const errorMessage = await error.message
        return errorMessage;
    }
}