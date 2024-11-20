import { HttpClient } from "../common/HttpClient";
import { LoggerService } from "../common/LoggerService";
import { Injectable } from "../core/Injectable";
import { Service } from "../core/Service";

@Injectable
@Service("BarService")
export class BarService {
  constructor(private logger: LoggerService, private http: HttpClient) {}

  async fetchData() {
    this.logger.log("BarService: Fetching data...");
    return await this.http.get("https://api.bar.com/data");
  }

  async sendData(payload: any) {
    this.logger.log("BarService: Sending data...");
    return await this.http.post("https://api.bar.com/data", payload);
  }

  process() {
    this.logger.log("BarService: Processing data...");
  }
}
