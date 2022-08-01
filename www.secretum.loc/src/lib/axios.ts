import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_CLOUD_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});
