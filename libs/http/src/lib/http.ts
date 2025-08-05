import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpService {
  private readonly client: AxiosInstance;

  constructor(private readonly baseUrl: string) {
    this.client = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(path, config);
    return response.data;
  }

  async post<T>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post<T>(path, data, config);
    return response.data;
  }

  // Add other HTTP methods as needed (put, delete, etc.)
}
