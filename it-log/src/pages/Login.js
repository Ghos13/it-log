import React from "react";

class Login extends React.Component {
  render() {
    return (
      <main className="login-section">
        <div className="container">
          <form className="login-form">
            <input
              className="login-name"
              type="text"
              name="name"
              id="name"
              placeholder="Username"
            />
            <input
              className="login-password"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default Login;
