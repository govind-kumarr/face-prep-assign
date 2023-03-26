import React from "react";
import { Person } from "../styles/styles";

export const PersonCard = ({ person }) => {
  const { name, picture, login } = person;
  return (
    <Person>
      <img className="profile_pic" src={picture.thumbnail} alt={name.first} />
      <span className="name">{name.first + name.last}</span>
    </Person>
  );
};
