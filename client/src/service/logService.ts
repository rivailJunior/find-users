import { Logger } from "../interface/logger";

class LogService {
  constructor(readonly logger: Logger) {}
  logMessage(message: string): void {
    this.logger.logMessage(message);
  }
  trackEvent(message: string, options?: any): void {
    this.logger.trackEvent(message, options);
  }
}

export { LogService };
