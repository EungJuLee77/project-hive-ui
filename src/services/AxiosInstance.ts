import axios, { AxiosInstance } from "axios"

const axiosinstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:9080",
});

axiosinstance.defaults.headers.common["x-auth-token"] = "48e16eae-6a8a-42ba-85f1-1a405c500b70";

export default axiosinstance