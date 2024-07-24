import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function Home() {
  const [tab, setTab] = useState("login");
  
  const changeTabHandler = (data) => () => setTab(data);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className="flex mb-4">
          <button
            onClick={changeTabHandler("login")}
            className={`flex-1 py-2 text-center font-semibold rounded-t-md ${
              tab === "login"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={changeTabHandler("signup")}
            className={`flex-1 py-2 text-center font-semibold rounded-t-md ${
              tab === "signup"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>
        <div className="bg-white rounded-b-md shadow-inner p-4">
          {tab === "login" ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}
