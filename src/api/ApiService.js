import apiService from "./AxiosClient";


const loginUser = async (data) => {
    const response = await apiService.post('mobile/authentication/validatelogin',data);
    console.log('response',response);
    return response;
};
export {loginUser};
