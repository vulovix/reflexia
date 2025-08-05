import { useReflection, type InjectableServices } from '@reflexia/di';
import { HttpService } from '@reflexia/http';
import { FooService } from './foo.service.js';

export class FooModule {
  static register() {
    // Expect FooHttpService to be already registered by the application
    const dependencies: InjectableServices<Record<string, unknown>> = [
      'FooHttpService',
    ];
    useReflection<FooService, [HttpService]>(
      'FooService',
      dependencies,
      (http) => new FooService(http)
    );
  }
}
