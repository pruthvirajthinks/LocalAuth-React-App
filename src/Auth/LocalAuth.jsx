import React, { createContext, Context, useState } from "react";
import RenderRoute from "../RenderRoute";

export const AuthData = createContext();

const LocalAuth = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userData")) || {
      username: "",
      email: "",
      password: "",
      signed: false,
    }
  );

  const SignUp = ({ username, email, password }) => {
    const data = { username, email, password, signed: true };
    setUserInfo(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };
  return (
    <AuthData.Provider value={{ userInfo, SignUp }}>
      <RenderRoute />
    </AuthData.Provider>
  );
};

export default LocalAuth;
