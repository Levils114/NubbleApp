import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer Mw.XKrH6jpliX8Fpq8T7N_eBVm-Pj3yLn5M1JFlTIUsPM8R35as1IoMG-akFwWZ',
  },
});
