import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCandidateTecnologyPivot1624579898316
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'candidates_technologies',
        columns: [
          {
            name: 'candidate_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'technology_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'is_main_tech',
            type: 'boolean',
            isNullable: false,
          },

          {
            name: 'candidateId',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'technologyId',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('candidates_technologies');
  }
}
