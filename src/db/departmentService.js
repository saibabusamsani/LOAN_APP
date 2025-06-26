import { database } from '../model/database';

export const createDepartment = async (data) => {
  return database.write(async () => {
    await database.get('departments').create(dept => {
      dept._raw.id = data.deptno;
      dept.deptno = data.deptno;
      dept.deptname = data.deptname;
    });
  });
};

export const getAllDepartments = async () => {
  const result = await database.get('departments').query().fetch();
  console.log("departments : ",result)
return result;

};

export const deleteAllDepartments = async () => {
  return database.write(async () => {
    const all = await database.get('departments').query().fetch();
    await database.batch(...all.map(dept => dept.prepareDestroyPermanently()));
  });
};
