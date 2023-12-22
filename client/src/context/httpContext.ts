import { createContext } from "react";
import { HttpService } from "../service/httpService";
import { AxiosAdapter } from "../adapters/axiosAdapter";
import { Https } from "../interface/http";
import { Logger } from "../interface/logger";
import { LogService } from "../service/logService";
import { LogRocketAdapter } from "../adapters/logrocketAdapter";

export const httpServiceValue = new HttpService(new AxiosAdapter());
export const logServiceValue = new LogService(new LogRocketAdapter());

export interface ContextValue {
  http: Https;
  logger: Logger;
}

export const contextValue: ContextValue = {
  http: httpServiceValue,
  logger: logServiceValue,
};

export const HttpContext = createContext(contextValue);
