import { Container } from "../core/Container";
import { QuxService } from "../services/QuxService";

export class QuxModule {
  public quxService: QuxService;

  constructor(container: Container) {
    this.quxService = container.resolve(QuxService);
  }
}

// Export an instance of QuxModule to use it like a singleton
const container = new Container();
export const quxModule = new QuxModule(container);
