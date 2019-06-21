import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '7e0bf4f0bfc147c4f525bbd3312fb385',
    language: 'ru-RU',
    adult: true
  }
});