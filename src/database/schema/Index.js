import { appSchema } from '@nozbe/watermelondb';
import { InceptionDraftSchema } from './InceptionDraftSchema';



export const schema = appSchema({
  version: 1,
  tables: [
    InceptionDraftSchema,
  ],
});
