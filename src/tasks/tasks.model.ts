import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProjectVariant } from 'src/projects-variants/project-variants.models';
import { User } from 'src/users/users.model';

interface TaskCreationAttrs {
  projectVariantId: number;
  managerId: number;
  name: string;
  startTime: string;
  endTime: string;
  points: number;
  costs: number;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, defaultValue: '' })
  description: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  startTime: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  endTime: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  points: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  costs: number;

  @ForeignKey(() => ProjectVariant)
  @Column({ type: DataType.INTEGER })
  projectVariantId: number;

  @BelongsTo(() => ProjectVariant)
  projectVariant: ProjectVariant;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  managerId: number;

  @BelongsTo(() => User)
  manager: User;
}
