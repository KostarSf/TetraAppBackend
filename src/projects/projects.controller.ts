import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Post()
  createProject(@Body() dto: CreateProjectDto) {
    return this.projectService.create(dto);
  }

  @Get()
  getAllProjects() {
    return this.projectService.getAll();
  }
}
