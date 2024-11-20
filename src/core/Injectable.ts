import "reflect-metadata";

export function Injectable<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  // design:paramtypes: This line is still responsible for storing constructor parameter types (used for dependency injection).
  Reflect.defineMetadata(
    "design:paramtypes",
    Reflect.getMetadata("design:paramtypes", constructor),
    constructor
  );
  // injectable Metadata: The additional line adds an "injectable" flag, which you can use to check if the class is decorated correctly.
  Reflect.defineMetadata("injectable", true, constructor);
}
