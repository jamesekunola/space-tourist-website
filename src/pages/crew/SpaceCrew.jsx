import { useState } from "react";
import "./spacecrew.css";
import { useGlobalState } from "../../context";
import Description from "../../component/description/Description";
import ImageSlider from "../../imageSlider/ImageSlider";

const SpaceCrew = () => {
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const {
    spaceInfo: { crew },
  } = useGlobalState();

  if (!crew) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="crew">
      <div className="wrapper">
        <p className="intro_text">
          <span className="intro_num">02</span>
          Meet your crew
        </p>

        <ImageSlider details={crew} type="crew" />
      </div>
    </section>
  );
};

export default SpaceCrew;
