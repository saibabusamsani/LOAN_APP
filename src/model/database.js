import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { mySchema } from './schema';
import Employee from './Employee';
import Department from './Department';
import { migrations } from './migrations';


const adapter = new SQLiteAdapter({
  schema: mySchema,
  migrations,
  unsafeSqlQuery: true,
});

 const database = new Database({
  adapter,
  modelClasses: [Employee, Department],
});

export {adapter,database}
