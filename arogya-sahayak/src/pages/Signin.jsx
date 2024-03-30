import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("success"))
      .catch((e) => {
        console.log(e, "wrong email/password");
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <p className=" text-2xl font-bold text-center mt-10">
        {" "}
        Welcome Back to Wellness: Sign In Here{" "}
      </p>
      <div className="flex flex-col items-center justify-center mt-12 border h-96 w-[420px] ml-[360px] rounded-2xl bg-blue-300">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-400 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          onClick={userSignIn}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-400 mt-4"
        >
          Sign In
        </button>
        <div className="mt-2">
          <span>Don't have an account?</span>
          <Link
            to="/signup"
            className="ml-1 text-blue-900 hover:underline focus:outline-none focus:ring"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
