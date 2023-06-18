import React from "react";
import "./description.css";

const Description = ({ Role, name, bio }) => {
  return (
    <div className="description">
      <h2>{Role}</h2>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default Description;
