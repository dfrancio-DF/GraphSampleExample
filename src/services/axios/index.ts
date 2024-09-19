import axios from 'axios';
import {ENV} from '../../config';

export const api = axios.create({
  baseURL: ENV.URLS.API_BASE_URL,
  timeout: 10000,
});
