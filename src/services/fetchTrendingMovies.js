import { axiosInstance } from '../helpers/axiosInstance';

export async function fetchTrendingMovies() {
    try {
        const response = await axiosInstance.get('/home');
        console.log(response.data[0]);
        return response.data[0].movies;
    } catch (error) {
        console.log(error);
        const errorMessage = await error.message
        return errorMessage;
    }
}
