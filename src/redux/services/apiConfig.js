import axios from 'axios';

export const reqDflts = axios.create({
  baseURL: 'http://localhost:3000/'
})