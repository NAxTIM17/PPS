import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_PATH || "http://localhost:4000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(`${import.meta.env.VITE_LOCAL_STORAGE_KEY}_token`);

        if (token) {
            config.headers.Authorization = `Token ${token}`;
        } else {
            delete axiosInstance.defaults.headers.common.Authorization;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
