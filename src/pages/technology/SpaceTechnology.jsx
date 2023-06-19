import { useState, useEffect } from "react";
import { useGlobalState } from "../../context";
import "./SpaceTechnology.css";

const SpaceTechnology = () => {
  // hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOrientation, setCurrentOrientation] = useState(
    window.innerWidth > 960 ? "portrait" : "landscape"
  );
  const {
    spaceInfo: { technology },
  } = useGlobalState();

  const handleScreenResize = () => {
    setCurrentOrientation(window.innerWidth > 960 ? "portrait" : "landscape");
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  if (!technology) {
    return <h1>Loading....</h1>;
  }

  const { name, description, images } = technology[currentIndex];
  const screenLayoutImage =
    currentOrientation === "portrait" ? images.portrait : images.landscape;

  const handleTechBtnClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="technology">
      <div className="wrapper">
        <p className="intro_text">
          <span className="intro_num">03</span>
          space lunch 101
        </p>

        {/* technology right */}
        <div className="technology__container">
          <div className="technology__right">
            <div className="img__container">
              <img src={screenLayoutImage} alt={name} />
            </div>
          </div>

          {/* technology left */}
          <div className="technology__left">
            {/* next techology btn */}
            <div className="technology__btns__container">
              {technology.map((tech, index) => (
                <span
                  key={tech.name}
                  onClick={() => handleTechBtnClick(index)}
                  className={`tech__btn ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  {index + 1}
                </span>
              ))}
            </div>

            <div className="technology__desc">
              <h3>THE TERMINOLOGY…</h3>
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceTechnology;
