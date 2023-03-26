import React from "react";
import { Person } from "../styles/styles";

export const PersonCard = ({ person, setPerson, popup }) => {
  const { name, picture, login } = person;
  return (
    <Person
      onClick={() => {
        setPerson(person);
      }}
    >
      <img className="profile_pic" src={picture.thumbnail} alt={name.first} />
      <span
        title="show details"
        className="name"
        onClick={() => popup.classList.toggle("showpopup")}
      >
        {name.first + name.last}
      </span>
    </Person>
  );
};
