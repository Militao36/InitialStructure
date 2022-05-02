interface Schedule {
  name?: string;
  page: number;
  limit: number;
}

export interface IConfiguration {
  schedule: Schedule
}