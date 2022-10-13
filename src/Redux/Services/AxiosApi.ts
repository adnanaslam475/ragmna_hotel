import axios from 'axios';
import { baseUrl } from '../../Api/baseURL'

export const apiInstance = axios.create({
  baseURL: baseUrl
})

apiInstance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
apiInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
  });