import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterExperienceFieldToExperienceId1623717920902
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('jobs', 'experience');

    await queryRunner.addColumn(
      'jobs',
      new TableColumn({
        name: 'experience_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'jobs',
      new TableForeignKey({
        name: 'JobExperience',
        columnNames: ['experience_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'experience',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('jobs', 'JobExperience');

    await queryRunner.dropColumn('jobs', 'experience_id');

    await queryRunner.addColumn(
      'jobs',
      new TableColumn({ name: 'experience', type: 'varchar' }),
    );
  }
}
