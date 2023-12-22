/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logger } from "../interface/logger";

import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
LogRocket.init("dbjqau/find-users");
setupLogRocketReact(LogRocket);

class LogRocketAdapter implements Logger {
  logMessage(message: string): void {
    LogRocket.captureMessage(message);
  }
  trackEvent(message: string, options?: any): void {
    LogRocket.track(message, options);
  }
}

export { LogRocketAdapter };
