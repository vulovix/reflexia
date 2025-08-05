import 'reflect-metadata';

// ***********MODULE*IMPORTS**************** //
import { FooModule, FooService } from '@reflexia/foo';
import { BarModule, BarService } from '@reflexia/bar';
import { BazModule, BazService } from '@reflexia/baz';

import { useReflex, useRegisterDependencies } from '@reflexia/di';
import { services } from './services';

// Register app-specific services first
useRegisterDependencies(services, [
  'FooHttpService',
  'BarHttpService',
  'LoggerService',
]);

FooModule.register();
BarModule.register();
BazModule.register();

// **********MODULE*INSTANCES************** //

// Resolve services by their registration name
const fooService = useReflex<FooService>('FooService');
const barService = useReflex<BarService>('BarService');
const bazService = useReflex<BazService>('BazService');

// *********PROGRAM*TS******************** //

(async () => {
  console.log('Hello, TypeScript + Webpack!!!');
  console.log(`Foo Service URL: ${process.env.FOO_SERVICE_URL}`);
  console.log(`Bar Service URL: ${process.env.BAR_SERVICE_URL}`);

  // Example usage of services
  const fooData = await fooService.fetchData();
  console.log('Foo Data:', fooData);

  const barData = await barService.fetchData();
  console.log('Bar Data:', barData);

  const bazData1 = await bazService.fetchFooData();
  const bazData2 = await bazService.fetchBarData();
  console.log('Baz Data:', bazData1, bazData2);
})();
