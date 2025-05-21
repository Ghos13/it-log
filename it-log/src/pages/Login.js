import React from "react";

class Login extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <form className="login-form">
            <input className="login-name" type="text" name="name" id="name" />
            <input
              className="login-password"
              type="password"
              placeholder="Password"
            />
          </form>
        </div>
      </main>
    );
  }
}
export default Login;
