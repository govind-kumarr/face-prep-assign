import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { PersonCard } from "../components/PersonCard";
import { SkeletonCard } from "../components/SkeletonCard";
import { HomeSection } from "../styles/styles";

let placeholderArr = new Array(30).fill(-1);
let popup;
export const Home = () => {
  const [showData, setShowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(30);
  const [person, setPerson] = useState(null);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://randomuser.me/api?results=${count}`
      );
      let users = await response.json();
      users = users.results;
      console.log(users[0]);
      setTimeout(() => {
        setShowData((prev) => [...prev, ...users]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Error fetching users", error);
    }
  };

  const handleScroll = () => {
    let innerHeight = window.innerHeight;
    let totalHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    if (innerHeight + scrollTop + 1 >= totalHeight) getUsers();
  };

  useEffect(() => {
    popup = document.querySelector(".popup");
    let viewPortWidth = window.innerWidth;
    if (viewPortWidth < 760) setCount(20);
    if (viewPortWidth < 460) setCount(10);

    getUsers();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <HomeSection>
        <div className="person_container">
          {showData.map((person) => {
            return (
              <PersonCard
                key={person.login.uuid}
                person={person}
                setPerson={setPerson}
                popup={popup}
              />
            );
          })}
          {isLoading &&
            placeholderArr.map((skeleton, ind) => <SkeletonCard key={ind} />)}
        </div>
        <div className="popup">
          <div className="infoField">
            <span className="heading">Name </span>
            <span className="value">
              {person?.name?.first + " " + person?.name?.last}
            </span>
          </div>
          <div className="infoField">
            <span className="heading">Phone </span>
            <span className="value">{person?.cell}</span>
          </div>
          <div className="infoField">
            <span className="heading">Age </span>
            <span className="value">{person?.dob?.age}</span>
          </div>
          <div className="infoField">
            <span className="heading">Email </span>
            <span className="value">{person?.email}</span>
          </div>
          <div className="infoField">
            <span className="heading">Adress </span>
            <span className="value">
              {person?.location?.city +
                " " +
                person?.location?.state +
                " " +
                person?.location?.country}
            </span>
          </div>
          <div className="infoField">
            <button
              className="btn closePopup"
              onClick={() => {
                popup.classList.toggle("showpopup");
              }}
            >
              close
            </button>
          </div>
        </div>
      </HomeSection>
    </>
  );
};
