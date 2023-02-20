import React, { useState } from "react";
import "./BlogAuth.styles.scss";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function BlogAuth({ setIsAuth }) {
  let [isError, setIsError] = useState(false);
  let navigate = useNavigate();
  const SignInWIthGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        console.log(isError);
        setIsError(true);
        console.log(isError);
      });
  };
  return (
    <div className="login">
      <p>Sign in with google</p>
      <button onClick={SignInWIthGoogle}>Sign in with google</button>
      <div className="cover-error"></div>
    </div>
  );
}

export default BlogAuth;
