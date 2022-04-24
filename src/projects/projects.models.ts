import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface ProjectCreationAttrs {
  orgId: number;
  description: string;
  name: string;
}

@Table({ tableName: 'projects' })
export class Project extends Model<Project, ProjectCreationAttrs> {
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

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  orgId: number;

  @BelongsTo(() => User)
  organizer: User;
}
