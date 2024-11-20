import { Container } from "../core/Container";
import { BarService } from "../services/BarService";

export class BarModule {
  public barService: BarService;

  // The constructor takes a Container instance, which allows us to resolve dependencies
  constructor(container: Container) {
    this.barService = container.resolve(BarService);
  }
}

// Export an instance of BarModule with a shared container
const container = new Container();
export const barModule = new BarModule(container);
