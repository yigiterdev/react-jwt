import axios from "axios";
const BASE_URL = "https://node-jwt-yigiterdev.vercel.app/";

export const axiosAPI = axios.create({
  baseURL: BASE_URL,
  headers: {"Content-Type": "application/json"}
});

export const axiosAPIPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {"Content-Type": "application/json"}
});
