import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import { AuthData } from "./Auth/LocalAuth";
import Profile from "./AuthReq/profile";
import Members from "./AuthReq/members";
import Public from "./public";
import Redirect from "./Redirect";

const RenderRoute = () => {
  const { userInfo } = useContext(AuthData);

  const [Signed, setSigned] = useState(userInfo.signed);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {Signed ? (
        <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/members" element={<Members />} />
          <Route path="/public" element={<Public />} />
        </>
      ) : null}
      <Route path="sign-up" element={<SignUp />} />
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
};

export default RenderRoute;
