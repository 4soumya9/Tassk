import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/CartSlice";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log("log in");
    dispatch(loginUser());
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
