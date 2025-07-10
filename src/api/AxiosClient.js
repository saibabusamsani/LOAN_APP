import axios from 'axios';
export const backendURL ='https://coworkerzone.in/devbe/';

const apiService = axios.create({
  baseURL : backendURL + 'mobile/',
  headers: {
    'Content-Type': 'application/json',
  },

});

// apiService.interceptors.request.use(
//   async (config) => {
    
//    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//     if (isLoggedIn == 1) {
//       const loginInfoo = await AsyncStorage.getItem('loginInfo');
//       const loginInfo = JSON.parse(loginInfoo);
//       const kioskId = await AsyncStorage.getItem('kioskId');

//       if (loginInfo && loginInfo != null) {
//         // Add headers from loginInfo
//         const ulbList = loginInfo.ulbList[0]
//         if (ulbList) {
//         //  Add headers from loginInfo
//           config.headers['employeeDesignationId'] = ulbList.employeeDesignationId;
//           config.headers['employeeId'] = ulbList.employeeId;
//           config.headers['adminId'] = ulbList.adminId;
//           config.headers['designationId'] = String(ulbList.designationId);
//           config.headers['kioskId'] = kioskId;
//         }
//      }

//    }
//     return config;
//   },
//   (error) => {

//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// apiService.interceptors.response.use(
//   function (response) {
//     if (response) return response;
//     else {
//       var message = 'We had trouble connecting to the server';
//       if (response.data.message) message = response.data.message;
//       return Promise.reject(response);
//     }
//   },
//   function (error) {
//     return Promise.reject(error);
//   },

// );

export default apiService;
