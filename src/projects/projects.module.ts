import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Project } from './projects.models';

@Module({
  providers: [ProjectsService],
  controllers: [ProjectsController],
  imports: [SequelizeModule.forFeature([User, Project])],
})
export class ProjectsModule {}
