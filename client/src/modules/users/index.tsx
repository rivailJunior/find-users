import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

export default function Users() {
  const { user, getUser } = useUser();
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
