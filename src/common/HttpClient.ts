import { Injectable } from "../core/Injectable";

@Injectable
export class HttpClient {
  async get(url: string): Promise<any> {
    console.log(`Fetching from ${url}...`);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: `Data from ${url}` }), 1000);
    });
  }

  async post(url: string, payload: any): Promise<any> {
    console.log(`Posting to ${url} with payload:`, payload);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: `Posted to ${url}` }), 1000);
    });
  }
}
