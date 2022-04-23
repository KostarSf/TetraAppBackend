import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from 'src/projects/projects.model';
import { ProjectVariant } from './project-variants.model';
import { ProjectVariantsService } from './project-variants.service';
import { ProjectVariantsController } from './project-variants.controller';

@Module({
  providers: [ProjectVariantsService],
  controllers: [ProjectVariantsController],
  imports: [SequelizeModule.forFeature([Project, ProjectVariant])],
})
export class ProjectVariantsModule {}
