import "reflect-metadata";

/**
 * @Service - Assigns a display name to a class for identification
 * @param name - The display name for the class
 */
export function Service(name: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata("className", name, constructor);
  };
}
