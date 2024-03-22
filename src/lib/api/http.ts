import { messageHandler } from '@/stores/message-handler';
import axios, { AxiosError } from 'axios';

const BASE_URL = 'http://localhost:8080';

export const $http = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: {
    indexes: null
  }
});

$http.interceptors.response.use(null, (error) => {
  if (error instanceof AxiosError) {
    messageHandler.addMessage(error.message);
    if (error.response?.status == 422) {
      messageHandler.addMessage(error.response.data);
    }
  }
});
