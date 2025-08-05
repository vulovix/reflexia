import { HttpService } from '@reflexia/http';

export class BazService {
  constructor(private fooHttp: HttpService, private barHttp: HttpService) {}

  async fetchFooData() {
    return this.fooHttp.get('/1');
  }

  async fetchBarData() {
    return this.barHttp.get('/1');
  }
}
