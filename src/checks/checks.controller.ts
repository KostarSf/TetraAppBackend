import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChecksService } from './checks.service';
import { CreateCheckDto } from './dto/create-check.dto';

@Controller('checks')
export class ChecksController {
  constructor(private checksService: ChecksService) {}

  @Post()
  createCheck(@Body() dto: CreateCheckDto) {
    return this.checksService.create(dto);
  }

  @Get()
  getAllChecks() {
    return this.checksService.getAll();
  }

  @Get(':id')
  getAllByTaskId(@Param('id') id: number) {
    return this.checksService.getAllByTaskId(id);
  }
}
