import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Portal,
  Modal,
  Button,
  TextInput,
  IconButton,
} from 'react-native-paper';
import { database } from '../model/database';

const DepartmentForm = ({ visible, setVisible }) => {
  const [formData, setFormData] = useState({
    deptno: '',
    deptname: '',
  });

  const hideModal = () => setVisible(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    console.log('Department:', formData);
    try {
      await database.write(async () => {
        await database.get('departments').create(dept => {
          dept._raw.id=formData.deptno
          dept.deptno = formData.deptno;
          dept.deptname = formData.deptname;
        });
      });
    } catch (error) {
      console.log('while adding department:', error);
       
    }

    hideModal();
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          
          {/* Department Number Field */}
          <View style={styles.inputRow}>
            <IconButton icon="numeric" size={24} />
            <TextInput
              label="Department No"
              value={formData.deptno}
              onChangeText={text => handleChange('deptno', text)}
              style={styles.textInput}
              keyboardType="numeric"
            />
          </View>

          {/* Department Name Field */}
          <View style={styles.inputRow}>
            <IconButton icon="domain" size={24} />
            <TextInput
              label="Department Name"
              value={formData.deptname}
              onChangeText={text => handleChange('deptname', text)}
              style={styles.textInput}
            />
          </View>

          <Button mode="contained" onPress={handleSave}>Add Department</Button>
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
    gap: '5%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default DepartmentForm;