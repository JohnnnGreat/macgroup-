import Footer from "../../Components/Footer/Footer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    token: "",
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  //Set values from input
  function handleName(e) {
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleToken(e) {
    setToken(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [ErrMessage, setErrMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate(username, email, token, password)) {
      try {
        const response = await axios.post(
          "http://localhost:8800/api/auth/register",
          { email, username, token, password }
        );
        navigate("/auth/login");
        console.log(response);
      } catch (e) {
        console.log(e);
        setError(true);
        setErrMessage(e.response.data);
      }
    } else {
      console.log("Errror");
    }
  };

  function validate(username, email, token, password) {
    let formIsValid = true;
    if (!username) {
      formIsValid = false;
      setError(true);
      setErrMessage("Username must not be empty");
    }

    if (!token) {
      formIsValid = false;
      setError(true);
      setErrMessage("Token can't be empty");
    }

    if (password.length < 8) {
      formIsValid = false;
      setError(true);
      setErrMessage("Password must be at least 8 characters");
    }

    const emailV = email.split("");
    if (!emailV.includes("@")) {
      formIsValid = false;
      setError(true);
      setErrMessage("Invalid Email Address");
    }

    return formIsValid;
  }

  return (
    <>
      <div className="login">
        <div className="login-wrapper">
          <h1>Register an account</h1>
          <div className="form">
            <form>
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                autoComplete="off"
                name="username"
                onChange={handleName}
                value={username}
              />
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="off"
                onChange={handleEmail}
                value={email}
              />
              <label htmlFor="token">Token</label>
              <input
                type="text"
                id="token"
                name="token"
                autoComplete="off"
                onChange={handleToken}
                value={token}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={handlePassword}
                value={password}
              />
              {error && <p className="error-mg">{ErrMessage}</p>}
              <div className="submit-btn">
                <button onClick={handleSubmit}>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Register;
