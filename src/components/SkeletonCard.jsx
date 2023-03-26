import React from "react";
import styled from "styled-components";

export const SkeletonCard = () => {
  return (
    <Skeleton>
      <div className="skeleton img"></div>
      <div className="info_box">
        <div className="skeleton skeleton_text"></div>
        <div className="skeleton skeleton_text"></div>
      </div>
    </Skeleton>
  );
};

const Skeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px solid lightgrey;
  padding: 5px;
  border-radius: 5px;

  .skeleton_text {
    width: 200px;
    height: 0.5rem;
    margin-bottom: 5px;
    border-radius: 2px;
  }
  .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }
  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;
