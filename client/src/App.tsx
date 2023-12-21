import "./App.css";
import { HttpProvider } from "./context/httpProvider";
import Users from "./modules/users";

function App() {
  return (
    <HttpProvider>
      <Users />
    </HttpProvider>
  );
}

export default App;
