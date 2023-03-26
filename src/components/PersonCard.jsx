import React from "react";
import styled from "styled-components";

export const PersonCard = ({ person }) => {
  const { name, picture, login } = person;
  return (
    <Person>
      <img className="profile_pic" src={picture.thumbnail} alt={name.first} />
      <span className="name">{name.first + name.last}</span>
    </Person>
  );
};

const Person = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid lightgrey;
  padding: 5px;
  border-radius: 5px;

  span.name {
    font-size: 18px;
  }
  .profile_pic {
    border-radius: 50%;
  }
`;
