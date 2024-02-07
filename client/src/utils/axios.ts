import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://twitter-clone-ipwo.onrender.com/",
  baseURL: "http://localhost:3000/",
});

export default axiosInstance;
