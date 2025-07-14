import axios from 'axios';
import * as generateApi from '@/generated-api';

const runtimeConfig = useRuntimeConfig();

const URL = runtimeConfig.public.apiUrl;

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default {
  Edition: new generateApi.EditionApi(undefined, undefined, axiosInstance),
  Game: new generateApi.GameApi(undefined, undefined, axiosInstance)
};
