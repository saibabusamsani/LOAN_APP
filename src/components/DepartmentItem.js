// components/DepartmentItem.js
import React from 'react';
import { DataTable } from 'react-native-paper';

const DepartmentItem = ({ department, employeeCount }) => {

  return (
    <DataTable.Row>
      <DataTable.Cell>{department.deptno}</DataTable.Cell>
      <DataTable.Cell>{department.deptname}</DataTable.Cell>
      {employeeCount !== undefined && (
        <DataTable.Cell>{employeeCount}</DataTable.Cell>
      )}
    </DataTable.Row>
  );
};

export default DepartmentItem;
