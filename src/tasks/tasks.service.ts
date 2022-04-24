import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task) private taskRepository: typeof Task,
    private userService: UsersService,
  ) {}

  async create(dto: CreateTaskDto) {
    const task = await this.taskRepository.create(dto);
    return task;
  }

  async getAll() {
    const tasks = await this.taskRepository.findAll({ include: { all: true } });
    return tasks;
  }

  async getByProjectVariantId(projectVariantId: number) {
    const tasks = await this.taskRepository.findAll({
      where: { projectVariantId },
      include: { all: true },
    });
    return tasks;
  }
}
