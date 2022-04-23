import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Project } from 'src/projects/projects.model';

interface ProjectVariantCreationAttrs {
  projectId: number;
  name: string;
}

@Table({ tableName: 'project_variants' })
export class ProjectVariant extends Model<
  ProjectVariant,
  ProjectVariantCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, defaultValue: '' })
  description: string;

  @Column({ type: DataType.STRING, defaultValue: 'pending' })
  status: string;

  @ForeignKey(() => Project)
  @Column({ type: DataType.INTEGER })
  projectId: number;

  @BelongsTo(() => Project)
  project: Project;
}
