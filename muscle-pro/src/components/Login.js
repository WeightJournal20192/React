import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import WelcomePage from "./WelcomePage";
import styled from "styled-components";
import axios from "axios";

// styled-components
const FormHeading = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const FormSetup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const EnterInput = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  margin-top: 30px;
`;
// end styled-components

const Login = props => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://weight-lifting1.herokuapp.com/api/auth/login", form)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/");
      })
      .catch(err => console.error(err.response));
  };

  return (
    <div>
      <nav>{/* <Link to='/newUser'>New User? Register Here</Link> */}</nav>
      <FormHeading>Current User Log In</FormHeading>
      <FormSetup onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <EnterInput
          id="username"
          type="text"
          name="username"
          placeholder="Minimum 5 Characters"
          onChange={handleChange}
          value={form.username}
        />
        <label htmlFor="password">Password</label>
        <EnterInput
          id="password"
          type="password"
          name="password"
          placeholder="Minimum 5 Characters"
          onChange={handleChange}
          value={form.password}
        />

        <LoginButton type="submit">Log In</LoginButton>
      </FormSetup>
      {/*<WelcomePage id={userName.username} /> */}
    </div>
  );
};

export default Login;
