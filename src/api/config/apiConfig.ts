import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer Ng.-fLv5cE_Jkaw7TnKEQBQbTc6sfpfL7hc1Ocm7rJxhujg6ZU3fdmYYakXLVnB',
  },
});
