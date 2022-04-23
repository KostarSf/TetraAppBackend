import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectVariantsModule } from './projects-variants/project-variants.module';
import { TasksModule } from './tasks/tasks.module';
import { ChecksModule } from './checks/checks.module';
import { TaskWorkersModule } from './task-workers/task-workers.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
    ProjectsModule,
    ProjectVariantsModule,
    TasksModule,
    ChecksModule,
    TaskWorkersModule,
  ],
})
export class AppModule {}
