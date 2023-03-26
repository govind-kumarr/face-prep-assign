import React from "react";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavBar>
      <button
        className="btn logout"
        onClick={() => {
          localStorage.setItem("loginData", null);
          navigate("/");
        }}
      >
        logout
      </button>
      <span className="username">
        <BiUserCircle />
        foo
      </span>
    </NavBar>
  );
};

const NavBar = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 1rem;
  font-size: 1.5rem;
  padding: 0px 1rem;

  .username {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid lightgrey;
    padding: 5px;
  }
`;
