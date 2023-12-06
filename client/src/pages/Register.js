import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1200/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input type="submit" value="register" />
      </form>
    </>
  );
};

export default Register;
