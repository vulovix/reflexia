import { Container } from "../core/Container";
import { BazService } from "../services/BazService";

export class BazModule {
  public bazService: BazService;

  // The constructor takes a Container instance, which allows us to resolve dependencies
  constructor(container: Container) {
    this.bazService = container.resolve(BazService);
  }
}

// Export an instance of BazModule with a shared container
const container = new Container();
export const bazModule = new BazModule(container);
