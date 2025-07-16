import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // replace with your server,
  withCredentials: true,
});

// Attach token from localStorage/sessionStorage/cookies
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
