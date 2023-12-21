import { createContext } from "react";
import { HttpService } from "../service/httpService";
import { AxiosAdapter } from "../adapters/axiosAdapter";
import { Https } from "../interface/http";
import { Logger } from "../interface/logger";
import { LogAdapter } from "../adapters/logAdapter";
import { LogService } from "../service/logService";

export const httpServiceValue = new HttpService(new AxiosAdapter());
export const logServiceValue = new LogService(new LogAdapter());

export interface ContextValue {
  http: Https;
  logger: Logger;
}

export const contextValue: ContextValue = {
  http: httpServiceValue,
  logger: logServiceValue,
};

export const HttpContext = createContext(contextValue);
