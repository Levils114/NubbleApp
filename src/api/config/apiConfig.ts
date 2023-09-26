import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer NQ.mWVe6Nlp9_S8uWUhAx0AfmnAx0IzeF4einZ1rYiajeEXJsgFg1IhmTdWx1RC',
  },
});
