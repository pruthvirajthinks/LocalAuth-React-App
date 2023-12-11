import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthData } from "./Auth/LocalAuth";

const Home = () => {
  const { userInfo } = useContext(AuthData);

  const [Signed, setSigned] = useState(userInfo.signed);

  return (
    <div>
      {!Signed && <Navigate to="/sign-up" />}
      <div>Home</div>
      <div className="flex flex-col p-4">
        <Link to="/profile">profile</Link>
        <Link to="/public">public</Link>
        <Link to="/members">members</Link>
      </div>
    </div>
  );
};

export default Home;
