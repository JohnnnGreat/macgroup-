import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [postUpdate, setPostUpdate] = useState(false);
  const login = async (inputs) => {
    const response = await axios.post(
      "http://localhost:8800/api/auth/login",

      inputs,
      { withCredentials: true }
    );
    setCurrentUser(response.data);
  };

  const logout = async (inputs) => {
    const response = await axios.get("http://localhost:8800/api/auth/logout", {
      withCredentials: true,
    });
    console.log(response);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
