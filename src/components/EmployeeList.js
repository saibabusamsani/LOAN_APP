import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { EnhancedEmployee } from '../observers/liveData';


const EmployeeList = ({ employees }) => {
  const safeEmployees = Array.isArray(employees) ? employees : [];

  return (
    <ScrollView>
      {safeEmployees.length === 0 ? (
        <View style={{ padding: 20 }}>
          <Text>No records found</Text>
        </View>
      ) : (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Salary</DataTable.Title>
            <DataTable.Title>Dept No</DataTable.Title>
            <DataTable.Title>Verified</DataTable.Title>
          </DataTable.Header>

          {safeEmployees.map((emp) => (
            <EnhancedEmployee key={emp.id} employee={emp} />
          ))}
        </DataTable>
      )}
    </ScrollView>
  );
};

export default EmployeeList;
