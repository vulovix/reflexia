import { HttpClient } from "../common/HttpClient";
import { LoggerService } from "../common/LoggerService";
import { Injectable } from "../core/Injectable";
import { Service } from "../core/Service";

@Injectable
@Service("BazService")
export class BazService {
  constructor(private logger: LoggerService, private http: HttpClient) {}

  async fetchData() {
    this.logger.log("BazService: Fetching data...");
    return await this.http.get("https://api.baz.com/data");
  }

  async sendData(payload: any) {
    this.logger.log("BazService: Sending data...");
    return await this.http.post("https://api.baz.com/data", payload);
  }

  process() {
    this.logger.log("BazService: Processing data...");
  }
}
