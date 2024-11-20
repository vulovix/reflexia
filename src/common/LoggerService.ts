import { Injectable } from "../core/Injectable";

@Injectable
export class LoggerService {
  log(message: string) {
    console.log(`[Logger]: ${message}`);
  }
}
