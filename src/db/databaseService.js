
import { Q } from '@nozbe/watermelondb';

import { getAllDepartments } from './departmentService';
import { getAllEmployees } from './employeeService';
import { database } from '../model/database';

export const getAllData = async () => {
  try {
    const employeeRecords = await getAllEmployees();
    const departmentRecords = await getAllDepartments();

    const empRecords = employeeRecords.map(emp => ({
      id: emp.id,
      name: emp.name,
      sal: emp.sal,
      deptno: emp.deptno,
    }));

    const deptRecords = departmentRecords.map(dept => ({
      id: dept.id,
      deptno: dept.deptno,
      deptname: dept.deptname,
    }));

    return { empRecords, deptRecords };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { empRecords: [], deptRecords: [] };
  }
};

export const getAllEmployeesWithDepartments = async () => {
  try {
    const employees = await getAllEmployees();

    const result = await Promise.all(
      employees.map(async emp => {
        let department = null;

        try {
          department = await emp.department.fetch(); // Uses the @relation
        } catch (err) {
          console.warn(`No department for ${emp.name}`);
        }

        return {
          name: emp.name,
          salary: emp.sal,
          deptno: emp.deptno,
          deptname: department?.deptname || 'N/A',
        };
      })
    );

    return result;
  } catch (error) {
    console.error('Failed to fetch employee data:', error);
    return [];
  }
};

export const getEmployeesByDepartmentId = async (deptno) => {
  try {
    const departments = await getAllDepartments();



    const dept = departments.find(d =>{
    return d.deptno == deptno
    })
      
    if (!dept) return null;

    const employees = await dept.employees.fetch();

    return employees.map(emp => ({
      name: emp.name,
      salary: emp.sal,
      deptno: emp.deptno,
    }));
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    return [];
  }
};
export const getEmpNamesStartsWithLetter = async (letter) => {
  try {
    const employees = await database.get('employees').query(Q.where('name', Q.like(`${letter}%`))).fetch();

    return employees.map(emp => ({
      name: emp.name,
      salary: emp.sal,
      deptno: emp.deptno,
    }));
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
}



