// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',  // Django API endpoint'iniz
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
