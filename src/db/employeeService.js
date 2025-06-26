import { database } from '../model/database';

export const createEmployee = async (data) => {
  return database.write(async () => {
    await database.get('employees').create(emp => {
      emp.name = data.name;
      emp.sal = data.sal;
      emp.deptno = data.deptno;
    });
  });
};

export const getAllEmployees = async () => {
  const records = await database.get('employees').query().fetch();
  console.log("employees",records);
  return records;
};

export const deleteAllEmployees = async () => {
  return database.write(async () => {
    const all = await database.get('employees').query().fetch();
    await database.batch(...all.map(emp => emp.prepareDestroyPermanently()));
  });
};
