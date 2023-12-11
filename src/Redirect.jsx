import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthData } from "./Auth/LocalAuth";

const Redirect = () => {
  const { userInfo } = useContext(AuthData);
  const [counter, setCounter] = useState(5);
  const [signed, setSigned] = useState(userInfo.signed);

  useEffect(() => {
    const timer = setInterval(() => setCounter((counter) => counter - 1), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <h1 className="text-2xl">This page does not exist</h1>
      <h2 className="text-xl">Redirecting in {counter}.</h2>
      {counter < 1 && <Navigate to={signed ? "/" : "/sign-up"} />}
    </div>
  );
};

export default Redirect;
