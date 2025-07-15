import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schema } from './schema/Index';
import InceptionDraft from './models/InceptionDraft';
const adapter = new SQLiteAdapter({
  schema,
  dbName: 'RoomDatabase',
});


export const database = new Database({
  adapter,
  modelClasses: [
    InceptionDraft
  ],
});
