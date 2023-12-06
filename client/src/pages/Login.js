import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1200/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
     console.log(data)
     if(data.user){
      console.log("Login succesfully...")
      navigate('/dashboard')
      // window.location.href = "/dashboard"
     }else{
      console.log("please check your email and password")
     }
  };
  return (
    <>
      <form onSubmit={registerUser}>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
