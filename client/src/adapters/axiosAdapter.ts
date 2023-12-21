/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Https } from "../interface/http";

class AxiosAdapter implements Https {
  async get(url: string): Promise<any> {
    const { data } = await axios.get(url);
    return data;
  }
}

export { AxiosAdapter };
