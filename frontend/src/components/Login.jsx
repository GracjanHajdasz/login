import "./Login.css";

export function Login({ setHasAccount }) {
  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" placeholder="login" />
      <input type="password" placeholder="password" />
      <button>login</button>
      <p>
        Don't have account{" "}
        <span onClick={() => setHasAccount(false)}>yet?</span>
      </p>
    </div>
  );
}
