import "./Login.css";

export function Login({
  setHasAccount,
  login,
  password,
  setLogin,
  setPassword,
  users,
}) {
  function saveLogin(event) {
    setLogin(event.target.value);
  }

  function savePassword(event) {
    setPassword(event.target.value);
  }

  function tryLogin() {
    const user = users.find(
      (u) => u.login === login && u.password === password
    );

    if (user) {
      alert("logged in as: " + login);
    } else {
      alert("cant log in");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
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
      <button onClick={() => tryLogin()}>login</button>
      <p>
        Don't have account{" "}
        <span onClick={() => setHasAccount(false)}>yet?</span>
      </p>
    </div>
  );
}
