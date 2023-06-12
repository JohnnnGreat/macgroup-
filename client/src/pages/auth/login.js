import Footer from "../../Components/Footer/Footer.js";

import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";

import "./auth.scss";
import { AuthContext } from "../../Context/authContext.js";
function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [error, setError] = useState(false);
  const [ErrMessage, setErrMessage] = useState("");
  const [formError, setFormError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }
  const loginAuth = (email, password) => {
    let formIsValid = true;
    const emailR = email.split("");
    if (!emailR.includes("@")) {
      formIsValid = false;
      setError(true);
      setErrMessage("Invalid Email Address");

      setTimeout(() => {
        setError(false);
      }, 7000);
    }

    if (password.length < 8) {
      formIsValid = false;
      setError(true);
      setErrMessage("Invalid password length");

      setTimeout(() => {
        setError(false);
      }, 7000);
    }

    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginAuth(email, password)) {
      try {
        await login({ email, password });
        navigate("/profile");
      } catch (e) {
        setError(true);
        setErrMessage(e.response.data);
        console.log(e);
        setTimeout(() => {
          setError(false);
        }, 10000);
      }
    } else {
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-wrapper">
          {error && <p className="error-mg">{ErrMessage}</p>}
          <h1 className="l-text">Login</h1>
          <div className="form">
            <form>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                required
                id="email"
                name="email"
                autoComplete="off"
                onChange={handleEmail}
                value={email}
              />

              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                onChange={handlePassword}
                value={password}
              />

              <div className="submit-btn">
                <button onClick={handleSubmit}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default React.memo(Login);
