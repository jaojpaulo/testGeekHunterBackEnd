import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterExperienceFieldToExperienceIdForCandidate1623808892530
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('candidates', 'experience');

    await queryRunner.addColumn(
      'candidates',
      new TableColumn({
        name: 'experience_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'candidates',
      new TableForeignKey({
        name: 'CandidateExperience',
        columnNames: ['experience_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'experience',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('candidates', 'CandidateExperience');

    await queryRunner.dropColumn('candidates', 'experience_id');

    await queryRunner.addColumn(
      'candidates',
      new TableColumn({ name: 'experience', type: 'varchar' }),
    );
  }
}
