import React from 'react';
import { DataTable, Checkbox } from 'react-native-paper';
import toggleEmployeeStatus from '../utils/employeeActions';
import { getAllEmployees } from '../db/employeeService';


const EmployeeItem = ({ employee }) => {
  const handleCheck = async () => {
    await toggleEmployeeStatus(employee);
    
  };

  return (
    <DataTable.Row>
      <DataTable.Cell>{employee.name}</DataTable.Cell>
      <DataTable.Cell>{employee.sal}</DataTable.Cell>
      <DataTable.Cell>{employee.deptno}</DataTable.Cell>
      <DataTable.Cell>
        <Checkbox
          status={employee.status ? 'checked' : 'unchecked'}
          onPress={handleCheck}
        />
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default EmployeeItem;
