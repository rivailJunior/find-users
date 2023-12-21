import { Https } from "../interface/http";

class HttpService {
  constructor(private http: Https) {}

  async get(url: string) {
    const response = await this.http.get(url);
    return { data: response };
  }
}

export { HttpService };
