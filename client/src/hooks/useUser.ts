import { useContext, useState } from "react";
import { IUser } from "../entities/user";
import { HttpContext } from "../context/httpContext";

export const useUser = () => {
  const { http, logger } = useContext(HttpContext);
  const [user, setUser] = useState<IUser[]>();
  async function getUser() {
    try {
      const { data } = await http.get("http://localhost:3000/users");
      setUser(data);
      logger.trackEvent("Users fetched", { total: data.length });
    } catch (error) {
      logger.logMessage("Unable to fetch users");
    }
  }

  return {
    user,
    getUser,
  };
};
