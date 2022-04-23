import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProjectVariantDto } from './dto/create-project-variant.dto';
import { ProjectVariantsService } from './project-variants.service';

@Controller('project_variants')
export class ProjectVariantsController {
  constructor(private projectVariantsService: ProjectVariantsService) {}

  @Post()
  createProjectVariant(@Body() dto: CreateProjectVariantDto) {
    return this.projectVariantsService.create(dto);
  }

  @Get()
  getAllProjectVariants() {
    return this.projectVariantsService.getAll();
  }

  @Get(':id')
  getAllByProjectId(@Param('id') id: number) {
    return this.projectVariantsService.getByProjectId(id);
  }
}
