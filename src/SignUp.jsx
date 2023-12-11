import React, { useContext, useState } from "react";
import { AuthData } from "./Auth/LocalAuth";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const { userInfo, SignUp } = useContext(AuthData);
  const [signed, setSigned] = useState(userInfo.signed);
  const [input, setInput] = useState({ username: "", email: "", password: "" });

  return (
    <div className="h-screen items-center justify-center flex">
      <form className="flex-col flex" onSubmit={() => SignUp(input)}>
        <label
          className="text-xl font-[Geist] font-medium text-gray-800"
          htmlFor="username"
        >
          Enter your Username
        </label>
        <input
          className="text-xl border-2 border-gray-800 py-2 px-4 rounded-md mt-1"
          id="username"
          placeholder="Username"
          type="text"
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
        />
        <label
          className="text-xl font-[Geist] font-medium text-gray-800"
          htmlFor="email"
        >
          Enter your Email
        </label>
        <input
          className="text-xl border-2 border-gray-800 py-2 px-4 rounded-md mt-1"
          id="email"
          placeholder="Email"
          type="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <label
          className="text-xl font-[Geist] font-medium text-gray-800"
          htmlFor="password"
        >
          Enter your Password
        </label>
        <input
          className="text-xl border-2 border-gray-800 py-2 px-4 rounded-md mt-1"
          id="password"
          placeholder="Password"
          type="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <button
          type="submit"
          className="bg-gray-100 hover:bg-gray-200 border-2 border-gray-800 rounded-md mt-6 py-2 "
        >
          Submit
        </button>
      </form>
      {signed && <Navigate to="/" />}
    </div>
  );
};

export default SignUp;
