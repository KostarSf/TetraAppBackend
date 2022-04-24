import { Test, TestingModule } from '@nestjs/testing';
import { TaskWorkersService } from './task-workers.service';

describe('TaskWorkersService', () => {
  let service: TaskWorkersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskWorkersService],
    }).compile();

    service = module.get<TaskWorkersService>(TaskWorkersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
