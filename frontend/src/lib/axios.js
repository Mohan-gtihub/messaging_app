import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://humisapp.netlify.app/api" : "/api",
  withCredentials: true,
});
