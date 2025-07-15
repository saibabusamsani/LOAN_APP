import { tableSchema } from '@nozbe/watermelondb';

export const InceptionDraftSchema = tableSchema({
  name: 'inception_draft',
  columns: [
    { name: 'date', type: 'string' },
    { name: 'time', type: 'string' },
    { name: 'address', type: 'string' },
    { name: 'captured_images', type: 'string'},
    { name: 'latitude', type: 'number' },
    { name: 'longitude', type: 'number' },
  ],
});
