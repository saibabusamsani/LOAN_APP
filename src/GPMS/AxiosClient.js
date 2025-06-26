import axios from "axios";

const backendURL ='https://gpmsuate.com/gpms/';


const apiService = axios.create({
    baseURL : backendURL ,
    headers: {
      'Content-Type': 'application/json',
    },
  
  });
  
  export default apiService;