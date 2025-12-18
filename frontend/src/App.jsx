import { Login } from "./components/Login.jsx";
import "./App.css";
import { Signup } from "./components/Signup.jsx";
import { useState } from "react";

function App() {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div className="app-container">
      {hasAccount ? (
        <Login setHasAccount={setHasAccount} />
      ) : (
        <Signup setHasAccount={setHasAccount} />
      )}
    </div>
  );
}

export default App;
