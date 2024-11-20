import { Container } from "../core/Container";
import { FooService } from "../services/FooService";

export class FooModule {
  public fooService: FooService;

  // The constructor takes a Container instance, which allows us to resolve dependencies
  constructor(container: Container) {
    this.fooService = container.resolve(FooService);
  }
}

// Export an instance of FooModule with a shared container
const container = new Container();
export const fooModule = new FooModule(container);
