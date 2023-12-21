import { Logger } from "../interface/logger";

class LogAdapter implements Logger {
  logMessage(message: string): void {
    console.log("LOGGER =>", message);
  }
}

export { LogAdapter };
