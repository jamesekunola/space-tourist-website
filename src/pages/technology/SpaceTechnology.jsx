import React from "react";
import "./SpaceTechnology.css";
import { useGlobalState } from "../../context.js";

const SpaceTechnology = () => {
  const { spaceInfo } = useGlobalState();

  if (!spaceInfo.technology) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="technology">
      <div className="wrapper"></div>
    </section>
  );
};

export default SpaceTechnology;
