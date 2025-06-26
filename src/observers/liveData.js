
import withObservables from '@nozbe/with-observables';

import EmployeeList from '../components/EmployeeList';
import DepartmentList from '../components/DepartmentList';
import { database } from '../model/database';
import EmployeeItem from '../components/EmployeeItem';
import DepartmentItem from '../components/DepartmentItem';


const LiveDepartmentList = withObservables([], () => ({
                departments: database.get('departments').query(),
              })
            )(DepartmentList);


const LiveEmployeesList = withObservables([], () => ({
  employees: database.get('employees').query().observe()
}))(EmployeeList);

const EnhancedEmployee = withObservables(['employee'], ({ employee }) => ({
  employee,
}))(EmployeeItem);

const EnhancedDepartmentItem = withObservables(
  ['department'], ({ department }) => ({
  department,
  employeeCount: department.employees.observeCount(),
}))(DepartmentItem);

  

  export {LiveDepartmentList,LiveEmployeesList,EnhancedEmployee,EnhancedDepartmentItem};
