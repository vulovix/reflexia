import { HttpService } from '@reflexia/http';
import { LoggerService } from '@reflexia/logger';

export const services = {
  FooHttpService: () => new HttpService(process.env.FOO_SERVICE_URL || ''),
  BarHttpService: () => new HttpService(process.env.BAR_SERVICE_URL || ''),
  LoggerService: () => new LoggerService(),
} as const;
