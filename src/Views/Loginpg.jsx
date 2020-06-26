import React, { useState } from "react";
import "./loginpg.css";
import { Link } from "react-router-dom";
import { firebaseLogin } from "../Fire/Auth";

const Loginpg = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = () => {
    firebaseLogin(username, password);
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <img
            src="https://image.freepik.com/free-vector/login-concept-illustration_114360-757.jpg"
            id="icon"
            alt="User Icon"
          />
        </div>

        <div id="ll">
          <h1>
            <b>Admin</b>
            <span>
              <b>Login</b>
            </span>
          </h1>
        </div>

        <form onSubmit={onSubmitHandler}>
          <input
            value={username}
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" className="fadeIn fourth" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Loginpg;
