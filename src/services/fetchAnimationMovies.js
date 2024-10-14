import { axiosInstance } from "../helpers/axiosInstance";

export async function fetchAnimationMovies() {
  try {
    const response = await axiosInstance.get("/home");
    console.log(response.data[2]);
    return response.data[2].movies;
  } catch (error) {
    console.log(error);
    const errorMessage = await error.message;
    return errorMessage;
  }
}
