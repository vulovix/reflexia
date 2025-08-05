import { container } from 'tsyringe';

export type InjectableServices<T = Record<string, unknown>> = (keyof T)[];

// registers the provided dependencies in the `tsyringe` container
// used only in modules to register dependencies
export function useRegisterDependencies<
  T extends Record<string, () => unknown>
>(services: T, names: InjectableServices<T>) {
  names.forEach((name) => {
    if (!container.isRegistered(name as string)) {
      const factory = services[name];
      if (!factory) {
        throw new Error(`No factory registered for service: ${String(name)}`);
      }
      container.register(name as string, {
        useFactory: factory,
      });
    }
  });
}

// reflects <T> to the world
// used only in modules to provide classes for consumption
export function useReflection<T, Deps extends unknown[]>(
  name: string,
  deps: InjectableServices,
  factory: (...args: Deps) => T
) {
  container.register<T>(name, {
    useFactory: (c) => {
      const resolved = deps.map((d) => c.resolve(d as string));
      return factory(...(resolved as Deps));
    },
  });
}

// resolves the injected <T> by token
// used within the app to get instances of registered services and modules
export function useReflex<T>(token: string): T {
  return container.resolve<T>(token);
}
