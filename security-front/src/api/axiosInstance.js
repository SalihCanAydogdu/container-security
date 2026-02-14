// src/api/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  // VITE_API_BASE_URL comes from the .env file and can be used if needed.
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;



