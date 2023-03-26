import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let data = new FormData(form);
    data = Object.fromEntries(data);
    if (!data.name || !data.password) return alert("Please Fill All Fields");

    localStorage.setItem("signUpData", JSON.stringify(data));

    form.reset();
    alert("Signup Successful");
    navigate("/login");
  };
  return (
    <SignUpDiv>
      <section className="signup_form">
        <h1>signup form</h1>
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
            singup
          </button>
          <p>
            already signed up{" "}
            <span onClick={() => navigate("/login")}>login here</span>
          </p>
        </form>
      </section>
    </SignUpDiv>
  );
};

const SignUpDiv = styled.div`
  .signup_form {
    max-width: 1200px;
    background: var(--fourth-color);
    padding: 1rem 1rem;
    margin: auto;
    color: white;
    display: flex;
    flex-direction: column;

    font-size: 20px;
  }

  .signup_form > h1 {
    text-align: center;
    text-transform: uppercase;
    color: black;
  }

  .form {
    width: 900px;
    padding: 1rem 1rem;
    margin: auto;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
    p {
      color: black;
      span {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .btn {
    background: var(--first-color);
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
  }
  .login {
    margin: 1rem;
  }
  .formfield {
    display: flex;
    justify-content: space-between;
    width: 500px;
    label {
      color: black;
      font-weight: bolder;
    }
    input,
    select {
      width: 50%;
      padding: 5px 1rem;
      font-size: 18px;
    }
    select {
      cursor: pointer;
      text-transform: capitalize;
    }
  }

  @media (max-width: 760px) {
    .signup_form {
      width: 100vw;
      align-items: center;
    }
    .form {
      width: 100%;
    }
    .formfield {
      flex-direction: column;
      width: 90%;
      input,
      select {
        width: 100%;
      }
    }
  }
  @media (max-width: 460px) {
    .signup_form {
      width: 100vw;
      align-items: center;
    }
    .form {
      width: 100%;
    }
    .formfield {
      flex-direction: column;
      width: 90%;
      input,
      select {
        width: 100%;
      }
    }
  }
`;
