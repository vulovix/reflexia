import { HttpClient } from "../common/HttpClient";
import { LoggerService } from "../common/LoggerService";
import { Injectable } from "../core/Injectable";
import { Service } from "../core/Service";

@Injectable
@Service("FooService")
export class FooService {
  constructor(private logger: LoggerService, private http: HttpClient) {}

  async fetchData() {
    this.logger.log("FooService: Fetching data...");
    return await this.http.get("https://api.foo.com/data");
  }

  async sendData(payload: any) {
    this.logger.log("FooService: Sending data...");
    return await this.http.post("https://api.foo.com/data", payload);
  }

  process() {
    this.logger.log("FooService: Processing data...");
  }
}
