import { HttpClient } from "../common/HttpClient";
import { LoggerService } from "../common/LoggerService";
import { Injectable } from "../core/Injectable";
import { Service } from "../core/Service";

export interface IQuxServiceConfiguration {
  q: number;
  u: number;
  x: number;
}

@Injectable
@Service("QuxService")
export class QuxService {
  private configuration: IQuxServiceConfiguration | undefined;

  constructor(private logger: LoggerService, private http: HttpClient) {}

  configure(configuration: IQuxServiceConfiguration) {
    this.configuration = configuration;
  }

  getConfiguration() {
    this.logger.log(`Configuration: ${JSON.stringify(this.configuration)}`);
    return this.configuration;
  }
}
