import axios from 'axios';
import Toast from 'react-native-toast-message';
export const backendURL ='https://coworkerzone.in/uatbe/';

const apiService = axios.create({
  baseURL : backendURL + 'mobile/',
  headers: {
    'Content-Type': 'application/json',
  },

});

apiService.interceptors.request.use(
  async (config) => {
    
      // const loginInfoo = await AsyncStorage.getItem('loginInfo');
     
    // if (loginInfoo != null) {
    //   config.headers['employeeDesignationId'] = ulbList.employeeDesignationId;
    // }
    return config;
  },
  (error) => {

    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  response => response,
  error => {
    const status = error?.response?.status;
    let message = 'Something went wrong';

    if (status === 403) {
      message = 'Access denied (403)';
    } else if (status === 404) {
      message = 'Resource not found (404)';
    } else if (status === 500) {
      message = 'Internal server error (500)';
    } else if (error.message === 'Network Error') {
      message = 'Please check your internet connection.';
    }

    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
      position: 'bottom',
    });

    return Promise.reject(error);
  }
)
 
export default apiService;
