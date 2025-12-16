import "./Login.css";

export function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" placeholder="login" />
      <input type="password" placeholder="password" />
      <button>login</button>
      <p>
        Don't have account <span>yet?</span>
      </p>
    </div>
  );
}
