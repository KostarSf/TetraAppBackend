import { Module } from '@nestjs/common';
import { TaskWorkersController } from './task-workers.controller';
import { TaskWorkersService } from './task-workers.service';

@Module({
  controllers: [TaskWorkersController],
  providers: [TaskWorkersService]
})
export class TaskWorkersModule {}
