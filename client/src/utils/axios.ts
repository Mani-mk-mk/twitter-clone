import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://twitter-clone-ipwo.onrender.com/",
});

export default axiosInstance;
