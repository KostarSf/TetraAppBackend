import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from 'src/tasks/tasks.model';
import { ChecksController } from './checks.controller';
import { Check } from './checks.model';
import { ChecksService } from './checks.service';

@Module({
  controllers: [ChecksController],
  providers: [ChecksService],
  imports: [SequelizeModule.forFeature([Task, Check])],
})
export class ChecksModule {}
