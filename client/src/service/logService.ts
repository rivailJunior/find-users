import { Logger } from "../interface/logger";

class LogService {
  constructor(readonly logger: Logger) {}
  logMessage(message: string): void {
    this.logger.logMessage(message);
  }
}

export { LogService };
