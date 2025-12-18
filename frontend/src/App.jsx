import { Login } from "./components/Login.jsx";
import "./App.css";
import { Signup } from "./components/Signup.jsx";
import { useState, useEffect } from "react";

function App() {
  const [hasAccount, setHasAccount] = useState(true);
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Users updated:", users);
  }, [users]);

  return (
    <div className="app-container">
      {hasAccount ? (
        <Login setHasAccount={setHasAccount} />
      ) : (
        <Signup
          setHasAccount={setHasAccount}
          setPassword={setPassword}
          setLogin={setLogin}
          login={login}
          password={password}
          users={users}
          setUsers={setUsers}
        />
      )}
    </div>
  );
}

export default App;
