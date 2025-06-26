import { tableSchema } from '@nozbe/watermelondb';
import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        {
          type: 'add_columns', 
          table: 'employees',
          columns: [
            { name: 'location', type: 'string' }, 
          ],
        },
      ],
    },
    {
        toVersion:3,
        steps:[
            {
                type:"add_columns",
                table:"employees",
                columns:[
                    {name:"age",type:"string"}
                ]
            }
        ]
    },
    {
        toVersion:4,
        steps:[
            {
                type:"add_columns",
                table:"employees",
                columns:[
                    {name:"price",type:"string"}
                ]
            }
        ]
    },
    {
      toVersion:5,
      steps:[
        {
          type:"",
          schema:tableSchema({
            name:"employees_new",
            columns:[
               { name: 'name', type: 'string' },
              { name: 'sal', type: 'number' },
              { name: 'deptno', type: 'string' }
            ]
          })
        },
        {
          type:"sql",
          sql:`

          insert into employees_new(id,name,sal,deptno)
          select id,name,sal,deptno from employees;

          `,
        },
        {
          type:"sql",
          sql:"drop table employees;"
        },
        {
          type:"sql",
          sql:"Alter table employees_new rename to employees;"
        }
      ]
    },
    {
      toVersion:6,
      steps:[
        {
          type:"create_table",
          schema:tableSchema({
            name:"employees_new",
            columns:[
              {name:"name",type:"string"},
              {name:"sal",type:"number"},
              {name:"deptno",type:"string"}
            ],
             associations: {
               departments: { type: 'belongs_to', key: 'deptno' },
                     },
          
          })
        },
        {
          type:"sql",
          sql:`
          insert into employees_new(id,name,sal,deptno)
          select id,name,sal,deptno from employees;
          `
        },
        {
          type:"sql",
          sql:"drop table employees;"
        },
        {
          type:"sql",
          sql:"alter table employees_new rename to employees;"
        }
      ]
    },
    {
      toVersion:7,
      steps:[
        {
          type:"add_columns",
          table:"employees",
          columns:[
            {name:"status",type:"boolean"}
          ]
        }
      ]
    },
    
  ],
});
