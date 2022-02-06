import axios from 'axios';

const api = axios.create({ baseURL: 'https://encript-password.herokuapp.com' });

const http = {
  createPassword: async (options) => {
    try {
      const response = await api.post('/encript', { ...options });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
};

export default http;
