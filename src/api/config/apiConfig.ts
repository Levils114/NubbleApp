import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer MQ.fFbs6nkmTkKh0XbY3IO7PaeTtoQh6MgGWt5tFtDhdpy0XIabSRCZjqq9rNLZ',
  },
});
