import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer Mg.3xBszyqRt_inxYXY1IOBQW1ebI8mw8c1aC7sYsgFwNK6N1qtBZKENOgXS_14',
  },
});
