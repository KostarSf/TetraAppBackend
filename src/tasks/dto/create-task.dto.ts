export class CreateTaskDto {
  readonly projectVariantId: number;
  readonly managerId: number;
  readonly name: string;
  readonly description: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly status: string;
  readonly points: number;
  readonly costs: number;
}
