import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Portal,
  Modal,
  Button,
  TextInput,
  Provider as PaperProvider,
  IconButton,
} from 'react-native-paper';
import { database } from '../model/database';

const EmployeeForm = ({ setVisible, visible}) => {

    const [formData,setFormData]=useState({
        name:"",
        dept:"",
        salary:""
    });

  const hideModal = () => setVisible(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    console.log("emp",formData);
    try{
        await database.write(async()=>{
            await database.get("employees").create(emp=>{
                emp.name=formData.name;
                emp.sal=Number(formData.salary);
                emp.deptno=formData.dept;
                emp.status=false;
            })
        })

    }
    catch(error)
    {
        console.log("while addding employee :",error)
    }



    // setFormData({ name: '', dept: '', salary: '' });
    hideModal();
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          
          {/* Name Field with Icon */}
          <View style={styles.inputRow}>
            <IconButton icon="account" size={24} style={{borderColor:"red"}}/>
            <TextInput
              label="Name"
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
              style={styles.textInput}
            />
          </View>

          {/* Department Field with Icon */}
          <View style={styles.inputRow}>
            <IconButton icon="office-building" size={24} />
            <TextInput
              label="Department"
              value={formData.dept}
              onChangeText={text => handleChange('dept', text)}
              style={styles.textInput}
            />
          </View>

          {/* Salary Field with Icon */}
          <View style={styles.inputRow}>
            <IconButton icon="currency-inr" size={24} />
            <TextInput
              label="Salary"
              value={formData.salary}
              onChangeText={text => handleChange('salary', text)}
              keyboardType="numeric"
              style={styles.textInput}
              placeholder='Ex: 12000'
            />
          </View>

          <Button mode="contained" onPress={handleSave}>Add</Button>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
},
modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    gap:"5%"
  },
  inputRow: {
    flexDirection: 'row',
    alignItems:"flex-end"
   
   
   
  },
  textInput: {
    flex: 1,
    backgroundColor:"transparent"
    
  },
});

export default EmployeeForm;
