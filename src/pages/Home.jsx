import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PersonCard } from "../components/PersonCard";
import { SkeletonCard } from "../components/SkeletonCard";

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
    console.log("use effect is running");
    let viewPortWidth = window.innerWidth;
    if (viewPortWidth < 760) setCount(20);
    if (viewPortWidth < 460) setCount(10);

    getUsers();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeSection>
      <div className="person_container">
        {showData.map((person) => {
          return <PersonCard key={person.login.uuid} person={person} />;
        })}
        {isLoading &&
          placeholderArr.map((skeleton, ind) => <SkeletonCard key={ind} />)}
      </div>
    </HomeSection>
  );
};
const HomeSection = styled.section`
  .person_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 1200px;
    margin: 1rem auto;
  }
  .skelton {
  }

  @media (max-width: 760px) {
    .person_container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 460px) {
    .person_container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
