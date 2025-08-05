import { HttpService } from '@reflexia/http';

export class FooService {
  constructor(private http: HttpService) {}

  private state = { counter: 0 };

  increment() {
    this.state.counter++;
    return this.state.counter;
  }

  async fetchData() {
    // now uses your HttpService under the hood
    return this.http.get('/1');
  }
}
