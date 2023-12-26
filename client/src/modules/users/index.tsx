/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { userDAO } from "../../entities/userDAO";
import { UserContext } from "../../context/userContext";

export default function Users() {
  const { http, logger } = useContext(UserContext);
  const { user, getUser } = useUser(
    new userDAO(http, logger, "http://localhost:3000")
  );
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <div>
        {!user?.length ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <div>
            <div>
              <label htmlFor="search">Search</label>
              <input type="text" placeholder="Find user" />
            </div>
          </div>
        )}
      </div>
      <div>
        <ul>
          {user?.map((user) => (
            <li key={user?.id}>{user?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
