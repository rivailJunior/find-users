import "./App.css";
import { UserProvider } from "./context/userProvider";
import Users from "./modules/users";

function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
