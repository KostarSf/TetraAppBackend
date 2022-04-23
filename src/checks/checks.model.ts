import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Task } from 'src/tasks/tasks.model';

interface CheckCreationAttrs {
  taskId: number;
  order: number;
  name: string;
}

@Table({ tableName: 'checks' })
export class Check extends Model<Check, CheckCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  order: number;

  @Column({ type: DataType.STRING, defaultValue: 'pending' })
  status: string;

  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER })
  taskId: number;

  @BelongsTo(() => Task)
  task: Task;
}
