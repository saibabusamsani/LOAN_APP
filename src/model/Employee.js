import { Model } from '@nozbe/watermelondb';
import { field, relation, writer } from '@nozbe/watermelondb/decorators';

export default class Employee extends Model {
  static table = 'employees';

  static associations = {
    department: { type: 'belongs_to', key: 'deptno' },
  };

  @field('name') name;
  @field('sal') sal;
  @field('deptno') deptno;
  @field('status') status;

  @writer async toggleStatus() {
    await this.update(emp => {
      emp.status = !emp.status;
          });
  }

  @relation('departments', 'deptno') department;
}
