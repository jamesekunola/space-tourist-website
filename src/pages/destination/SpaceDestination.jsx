import React, { useState } from "react";
import { useGlobalState } from "../../context";
import "./SpaceDestination.css";

const SpaceDestination = () => {
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const { spaceInfo } = useGlobalState();

  if (!spaceInfo.destinations) {
    return <h1>Loading</h1>;
  }

  const {
    description,
    distance,
    images: { webp },
    name,
    travel,
  } = spaceInfo.destinations[displayedIndex];

  const planetNames = spaceInfo.destinations.map((planet) => planet.name);

  return (
    <section className="destination">
      <div className="wrapper">
        <p className="intro_text">
          <span className="intro_num">01</span>
          Pick your destination
        </p>
        <div className="destination__container">
          {/* destination left */}
          <div className="destination__left">
            <img src={webp} alt={name} />
          </div>

          {/* destination right */}

          <div className="destination__right">
            {/* planet names*/}
            {planetNames.map((planet, index) => (
              <button
                key={index}
                className={`destination__planet__btn ${
                  index === displayedIndex && "isActive"
                }`}
                onClick={() => setDisplayedIndex(index)}
              >
                {planet}
              </button>
            ))}

            <h2>{name}</h2>
            <p>{description}</p>

            <div className="destination__distance_wrapper">
              {/*  DISTANCE */}
              <div className="destination__distance">
                <span className="destination__travels_details">
                  AVG. DISTANCE
                </span>
                <h3>{distance}</h3>
              </div>
              <div className="destination__travel">
                <span className="destination__travels_details">
                  Est. travel time
                </span>
                <h3>{travel}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceDestination;
