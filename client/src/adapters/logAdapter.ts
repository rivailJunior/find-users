/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logger } from "../interface/logger";

class LogAdapter implements Logger {
  trackEvent(message: string, options?: any): void {
    console.log("LOGGER - Track Event =>", message, options);
  }
  logMessage(message: string): void {
    console.log("LOGGER - Log Error =>", message);
  }
}

export { LogAdapter };
