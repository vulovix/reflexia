import "reflect-metadata";

export class Container {
  private services = new Map();

  resolve<T>(target: new (...args: any[]) => T): T {
    const isInjectable = Reflect.getMetadata("injectable", target);
    if (!isInjectable) {
      const className =
        Reflect.getMetadata("className", target) || "UnknownClass";
      const colorClassName = `\x1b[31m${className}\x1b[0m`;
      console.warn(`${colorClassName} is not marked as @Injectable.`);
      // throw new Error(`${colorClassName} is not marked as @Injectable`);
    }

    if (this.services.has(target)) {
      return this.services.get(target);
    }

    const tokens = Reflect.getMetadata("design:paramtypes", target) || [];
    const injections = tokens.map((token: any) => this.resolve(token));

    const instance = new target(...injections);
    this.services.set(target, instance);
    return instance;
  }
}
