import apiService from "./AxiosClient";

const loginUser = async (data) => {
  
    try{
        const response = await apiService.post('mobile/authentication/validatelogin',data);
    
        return response.data;

    }
    catch(error){
        console.log("login error  :",error);
    }
}  ;

const logOut=async (id)=>{
     try{
        const response = await apiService.post('mobile/authentication/logout',id);
       
        return response.status;

    }
    catch(error){
        console.log("logout error  :",error);
    }
}
const syncData=async (data)=>{
     try{
        const response = await apiService.post('mobile/sync/setup',data);
       
        return response.data;

    }
    catch(error){
        console.log("fetching sync error  :",error);
    }
}
export {loginUser,logOut,syncData};