import React, { useEffect, useState } from 'react';
import { View,ScrollView, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, DataTable, Snackbar } from 'react-native-paper';
import EmployeeForm from '../components/EmployeeForm';
import DepartmentForm from '../components/DeptForm';
import Feather from 'react-native-vector-icons/Feather';
import { getAllEmployeesWithDepartments, getEmployeesByDepartmentId, getEmpNamesStartsWithLetter } from '../db/databaseService';
import { deleteAllEmployees } from '../db/employeeService';
import { deleteAllDepartments } from '../db/departmentService';
import { LiveDepartmentList, LiveEmployeesList } from '../observers/liveData';


const Tab = createMaterialTopTabNavigator();



export default function Database() {
 

  const [openEmpForm,setOpenEmpForm]=useState(false);
  const [openDeptForm,setOpenDeptForm]=useState(false);
  const [refresh,setRefresh]=useState(false);

  const [showMsg,setShowMsg]=useState(false);

  const [msg,setMsg]=useState("");



  const deleteAll = async () => {

   await deleteAllEmployees();
   await  deleteAllDepartments();
  
    setShowMsg(true);
    setMsg("All records deleted succsefully")
};

const printerHandle=async ()=>{

  const res=await getAllEmployeesWithDepartments();
  const res1= await getEmployeesByDepartmentId(10);

  const res2=await getEmpNamesStartsWithLetter("s");
  
  console.log("employeeswithDept: ",res);
  console.log("employees by id: ",res1);
  console.log("employees names starts : ",res2);

  setMsg("check in consoles");
   setShowMsg(true);

}
  

  return (
    <View style={{ flex: 1 }}>
      <View style={{flex:.5}}>
      <Tab.Navigator>
      <Tab.Screen name="Employee" options={{ title: `Employees` }}>
        {() => <LiveEmployeesList/>}
      </Tab.Screen>

  <Tab.Screen
    name="Department"
    options={{ title: `Departments` }}
  >
    {() => <LiveDepartmentList/>}
  </Tab.Screen>
      </Tab.Navigator>
      </View>

      <View style={{ padding: 10,flexDirection:"row" ,alignItems:"center",justifyContent:"center",gap:"5%",marginTop:"5%",flexWrap:"wrap"}}>
       
        <Button icon="plus" mode="contained" onPress={()=>setOpenEmpForm(true)}>Add Emp</Button>
        <Button icon="codepen" mode="contained" onPress={()=>setOpenDeptForm(true)}>Add Dept</Button>
        
    
       <Button
              icon={({ size, color }) => (
                <Feather name="trash-2" size={size} color={color} />
              )}
              mode="contained"
              onPress={deleteAll}
                  >
        Delete All
      </Button>
       <Button
              icon={({ size, color }) => (
                <Feather name="printer" size={size} color={color} />
              )}
              mode="contained"
              onPress={printerHandle}
                  >
        emp + dept 
      </Button>

      
      
    
      </View>
      {
        openEmpForm&&<EmployeeForm visible={openEmpForm} setVisible={setOpenEmpForm}/>
      }
      {
        openDeptForm&&<DepartmentForm visible={openDeptForm} setVisible={setOpenDeptForm}/>
      }
     

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
  );
}
