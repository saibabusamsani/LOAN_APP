import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class InceptionDraft extends Model {
   static table = 'inception_draft';

  @field('date') date;
  @field('time') time;
  @field('address') address;
  @field('captured_images') capturedImages; 
  @field('latitude') latitude;
  @field('longitude') longitude;
}
  