import axios, { AxiosError } from 'axios';

import { messageHandler } from '@/stores/message-handler';

const BASE_URL = import.meta.env.VITE_API_URL as string;

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
