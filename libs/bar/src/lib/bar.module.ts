import { useReflection, type InjectableServices } from '@reflexia/di';
import { HttpService } from '@reflexia/http';

import { BarService } from './bar.service.js';

export class BarModule {
  static register() {
    // Expect BarHttpService to be already registered by the application
    const dependencies: InjectableServices<Record<string, unknown>> = [
      'BarHttpService',
    ];
    useReflection<BarService, [HttpService]>(
      'BarService',
      dependencies,
      (http) => new BarService(http)
    );
  }
}
