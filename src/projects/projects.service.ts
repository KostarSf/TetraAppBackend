import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './projects.models';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async create(dto: CreateProjectDto) {
    const project = await this.projectRepository.create(dto);
    return project;
  }

  async getAll() {
    const projects = await this.projectRepository.findAll({
      include: { all: true },
    });
    return projects;
  }
}
