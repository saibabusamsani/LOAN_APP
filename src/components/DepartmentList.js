// components/DepartmentList.js
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { EnhancedDepartmentItem } from '../observers/liveData';


const DepartmentList = ({ departments }) => {
  const safeDepartments = Array.isArray(departments) ? departments : [];

  return (
    <ScrollView>
      {safeDepartments.length === 0 ? (
        <View style={{ padding: 20 }}>
          <Text>No records found</Text>
        </View>
      ) : (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Dept No</DataTable.Title>
            <DataTable.Title>Dept Name</DataTable.Title>
            <DataTable.Title>No.of Employees</DataTable.Title>
          </DataTable.Header>

          {safeDepartments.map((dept) => (
            <EnhancedDepartmentItem
              key={dept.id}
              department={dept}
            />
          ))}
        </DataTable>
      )}
    </ScrollView>
  );
};

export default DepartmentList;
