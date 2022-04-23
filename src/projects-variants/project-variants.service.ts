import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectVariantDto } from './dto/create-project-variant.dto';
import { ProjectVariant } from './project-variants.models';

@Injectable()
export class ProjectVariantsService {
  constructor(
    @InjectModel(ProjectVariant)
    private projectVariantRepository: typeof ProjectVariant,
  ) {}

  async create(dto: CreateProjectVariantDto) {
    const projectVariant = await this.projectVariantRepository.create(dto);
    return projectVariant;
  }

  async getAll() {
    const projectVariants = await this.projectVariantRepository.findAll({
      include: { all: true },
    });
    return projectVariants;
  }

  async getByProjectId(projectId: number) {
    const projectVariants = await this.projectVariantRepository.findAll({
      where: { projectId },
      include: { all: true },
    });
    return projectVariants;
  }
}
