import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { PersonCard } from "../components/PersonCard";
import { SkeletonCard } from "../components/SkeletonCard";
import { HomeSection } from "../styles/styles";

let placeholderArr = new Array(30).fill(-1);

export const Home = () => {
  const [showData, setShowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(30);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://randomuser.me/api?results=${count}`
      );
      let users = await response.json();
      users = users.results;
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
            return <PersonCard key={person.login.uuid} person={person} />;
          })}
          {isLoading &&
            placeholderArr.map((skeleton, ind) => <SkeletonCard key={ind} />)}
        </div>
      </HomeSection>
    </>
  );
};
