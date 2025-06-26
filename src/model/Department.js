import { Model } from '@nozbe/watermelondb';
import { children, field } from '@nozbe/watermelondb/decorators';

export default class Department extends Model {
  static table = 'departments';

  @field('deptno') deptno;
  @field('deptname') deptname;

  static associations = {
    employees: { type: 'has_many', foreignKey: 'deptno' },
  };

   @children('employees') employees; 
}
