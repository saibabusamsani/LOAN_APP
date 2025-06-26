import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Snackbar } from 'react-native-paper'
import {loginUser, logOut, syncData} from "./ApiService"
import { tokens } from 'react-native-paper/lib/typescript/styles/themes/v3/tokens'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {


  const [showMsg,setShowMsg]=useState(false);
  const [msg,setMsg]=useState("");


  const handleLogin=async ()=>{

    try{

      const resp=await loginUser({
          deviceId: "ff6ecc03de6516e8",
          deviceModel: "IQ",
          employeeId: "2100",
          mobileIpAddress: "10.0.2.15",
          mobileLastLocation: "37.4220936,-122.083922",
          password: "123456",
          regId: "king",
          versionName: "1.0.2"
      });
  
      const userData={
        employeeDesignationIds:resp.employeeDesignationIds,
        token:resp.token,
      };
  
      await AsyncStorage.setItem("userData",JSON.stringify(userData));
  
      console.log("UserDeatails : ",userData);



      if(resp.status===1)
      {
        setShowMsg(true);
        setMsg("Login succesfully");

            const syncReponse=  await syncData({
                    data: JSON.stringify({inboxSyncTime:0 ,syncTime: 0}),
                    employeeDesignationIds: ["2100321857"],
                    employeeId: resp.employeeId,
                    token:`Bearer ${resp.token}`
                });

                console.log("sync repsonse : ",syncReponse);
      }
      else{
          setMsg("Already login");
      }


      
    }

    catch(error){
      console.log("err",error)
    }


  };

  const handleLogout=async()=>{
    const result=await logOut({employeeId:2100});
    if(result===200)
    {
      setMsg("Logout succesfully");
      setShowMsg(true);
    }

  }
  return (
    <View style={{flex:1,gap:"5%",flexDirection:"row",padding:"5%"}}>
      <Button mode='contained' onPress={handleLogin} style={{height:40}}>Login + sync</Button>
      <Button mode='contained' onPress={handleLogout} style={{height:40}}>Logout</Button>

       <Snackbar
        visible={showMsg}
        onDismiss={setShowMsg}
        action={{
          label: 'Undo',
          onPress: () => {
            
          },
        }}>
        {msg}
      </Snackbar>
    </View>
  )
}

export default App