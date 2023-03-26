import React from "react";
import { Skeleton } from "../styles/styles";

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
