import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectVariant } from 'src/projects-variants/project-variants.model';
import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { TasksController } from './tasks.controller';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    SequelizeModule.forFeature([ProjectVariant, Task, User]),
    UsersModule,
  ],
  exports: [TasksService],
})
export class TasksModule {}
