import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class RemoveTechnologiesColumnFromJobs1623892403148
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('jobs', 'technologies');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'jobs',
      new TableColumn({ name: 'technologies', type: 'varchar' }),
    );
  }
}
