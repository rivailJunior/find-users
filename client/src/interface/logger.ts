/* eslint-disable @typescript-eslint/no-explicit-any */
interface Logger {
  logMessage(message: string): void;
  trackEvent(message: string, options?: any): void;
}

export type { Logger };
