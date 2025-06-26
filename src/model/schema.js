import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const mySchema = appSchema({
  version: 7,
  tables: [
    tableSchema({
      name: 'employees',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'sal', type: 'number' },
        { name: 'deptno', type: 'string' },
        {name:"status",type:"boolean"},
        
  
      ],
    }),
    tableSchema({
      name: 'departments',
      columns: [
        { name: 'deptno', type: 'string' },
        { name: 'deptname', type: 'string' },
      ],
    }),
  ],
});
