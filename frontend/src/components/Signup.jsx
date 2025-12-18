import "./Login.css";

export function Signup({ setHasAccount }) {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <input type="text" placeholder="login" />
      <input type="password" placeholder="password" />
      <button>Create account</button>
      <p>
        Already have an{" "}
        <span onClick={() => setHasAccount(true)}>account?</span>
      </p>
    </div>
  );
}
