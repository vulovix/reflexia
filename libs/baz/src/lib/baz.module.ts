import { useReflection, type InjectableServices } from '@reflexia/di';
import { BazService } from './baz.service.js';
import { HttpService } from '@reflexia/http';

export class BazModule {
  static register() {
    // Expect FooHttpService and BarHttpService to be already registered by the application
    const dependencies: InjectableServices<Record<string, unknown>> = [
      'FooHttpService',
      'BarHttpService',
    ];
    useReflection<BazService, [HttpService, HttpService]>(
      'BazService',
      dependencies,
      (foo, bar) => new BazService(foo, bar)
    );
  }
}
