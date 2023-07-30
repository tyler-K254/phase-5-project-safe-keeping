import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5555/', // Replace with your backend URL
});

// Add the JWT token to the request headers
axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
