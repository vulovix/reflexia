export class LoggerService {
  colors = {
    reset: '\x1b[0m',
    log: '\x1b[36m',
    info: '\x1b[32m',
    warn: '\x1b[33m',
    error: '\x1b[31m',
  };

  log(message: string) {
    console.log(`${this.colors.log}[reflexia]${this.colors.reset} ${message}`);
  }

  info(message: string) {
    console.info(
      `${this.colors.info}[reflexia] INFO:${this.colors.reset} ${message}`
    );
  }

  warn(message: string) {
    console.warn(
      `${this.colors.warn}[reflexia] WARN:${this.colors.reset} ${message}`
    );
  }

  error(message: string) {
    console.error(
      `${this.colors.error}[reflexia] ERROR:${this.colors.reset} ${message}`
    );
  }
}
