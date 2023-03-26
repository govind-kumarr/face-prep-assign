import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../styles/styles";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let data = new FormData(form);
    data = Object.fromEntries(data);
    if (!data.name || !data.password) return alert("Please Fill All Fields");

    if (data.name === "foo" && data.password === "bar") {
      form.reset();
      alert("Login successful");
      navigate("/home");
    } else {
      form.reset();
      return alert("Wrong Credentials!");
    }
  };
  return (
    <LoginDiv>
      <section className="signup_form">
        <h1>login form</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formfield">
            <label htmlFor="name">name</label>
            <input name="name" type="text" />
          </div>

          <div className="formfield">
            <label htmlFor="password">password</label>
            <input name="password" type="password" />
          </div>

          <button className="btn login" type="submit">
            login
          </button>
        </form>
      </section>
    </LoginDiv>
  );
};
