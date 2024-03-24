import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://recruitment-api.pyt1.stg.jmr.pl',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
