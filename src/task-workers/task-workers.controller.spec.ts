import { Test, TestingModule } from '@nestjs/testing';
import { TaskWorkersController } from './task-workers.controller';

describe('TaskWorkersController', () => {
  let controller: TaskWorkersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskWorkersController],
    }).compile();

    controller = module.get<TaskWorkersController>(TaskWorkersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
