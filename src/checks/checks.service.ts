import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Check } from './checks.model';
import { CreateCheckDto } from './dto/create-check.dto';

@Injectable()
export class ChecksService {
  constructor(@InjectModel(Check) private checkRepository: typeof Check) {}

  async create(dto: CreateCheckDto) {
    const check = await this.checkRepository.create(dto);
    return check;
  }

  async getAll() {
    const checks = await this.checkRepository.findAll({
      include: { all: true },
    });
    return checks;
  }

  async getAllByTaskId(taskId: number) {
    const checks = await this.checkRepository.findAll({
      where: { taskId },
      include: { all: true },
    });
    return checks;
  }
}
