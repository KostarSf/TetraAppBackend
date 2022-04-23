import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAll();
  }

  @Get(':id')
  getAllByProjectId(@Param('id') id: number) {
    return this.tasksService.getByProjectVariantId(id);
  }
}
