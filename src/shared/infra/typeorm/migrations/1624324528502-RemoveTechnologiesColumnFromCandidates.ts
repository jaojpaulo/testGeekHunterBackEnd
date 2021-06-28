import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class RemoveTechnologiesColumnFromCandidates1624324528502
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('candidates', 'technologies');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'candidates',
      new TableColumn({
        name: 'technologies',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }
}
