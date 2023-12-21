/* eslint-disable @typescript-eslint/no-explicit-any */
import { Https } from "../interface/http";

class FetchAdapter implements Https {
  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }
}

export { FetchAdapter };
