import { Https } from "../interface/http";
import { Logger } from "../interface/logger";
import { IUser } from "./user";

export interface IuserDao {
  getUser(): Promise<IUser[]>;
}

class userDAO {
  constructor(
    readonly http: Https,
    readonly logger: Logger,
    readonly baseURL: string
  ) {}

  async getUser() {
    try {
      const { data } = await this.http.get(`${this.baseURL}/users`);
      this.logger.trackEvent("Users fetched", { total: data.length });
      return data;
    } catch (error) {
      this.logger.logMessage("Unable to fetch users");
    }
  }
}

export { userDAO };
