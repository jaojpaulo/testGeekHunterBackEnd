import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateJobTechnologyPivot1624237806556
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'jobs_technologies',
        columns: [
          {
            name: 'jobsId',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'technologiesId',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'jobs_technologies',
      new TableForeignKey({
        name: 'jobs_fk',
        columnNames: ['jobsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'jobs',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'jobs_technologies',
      new TableForeignKey({
        name: 'jobs_technologies_fk',
        columnNames: ['technologiesId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'technologies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('jobs_technologies', 'jobs_fk');
    await queryRunner.dropForeignKey(
      'jobs_technologies',
      'jobs_technologies_fk',
    );

    await queryRunner.dropTable('jobs_technologies');
  }
}
