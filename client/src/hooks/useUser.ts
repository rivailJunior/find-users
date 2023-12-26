import { useState } from "react";
import { IUser } from "../entities/user";
import { IuserDao } from "../entities/userDAO";

export const useUser = (userDAO: IuserDao) => {
  const [user, setUser] = useState<IUser[]>();
  async function getUser() {
    const data = await userDAO.getUser();
    setUser(data);
  }

  return {
    user,
    getUser,
  };
};
