import { useState } from "react";
import "./Login.css";

export function Signup({
  setHasAccount,
  setLogin,
  setPassword,
  login,
  password,
  setUsers,
  users,
}) {
  const [isLoginAvailable, setIsLoginAvailable] = useState(true);

  function saveLogin(event) {
    setLogin(event.target.value);
  }

  function savePassword(event) {
    setPassword(event.target.value);
  }

  function checkIfUserExists() {
    const user = users.find((u) => login === u.login);

    if (user) {
      setIsLoginAvailable(false);
    } else {
      addUser();
    }
  }

  function addUser() {
    const newUser = [
      ...users,
      { password: password, login: login, userId: crypto.randomUUID() },
    ];
    setUsers(newUser);
    setLogin("");
    setPassword("");
    setHasAccount(true);
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <input
        value={login}
        onChange={saveLogin}
        type="text"
        placeholder="login"
      />
      <input
        value={password}
        onChange={savePassword}
        type="password"
        placeholder="password"
      />
      <button onClick={checkIfUserExists}>Create account</button>
      {isLoginAvailable ? (
        <p className="not-taken-login">this login is taken</p>
      ) : (
        <p className="taken-login">this login is taken</p>
      )}
      <p>
        Already have an{" "}
        <span onClick={() => setHasAccount(true)}>account?</span>
      </p>
    </div>
  );
}
