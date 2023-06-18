import { useState, useEffect } from "react";
import "./imageSlider.css";

const ImageSlider = ({ details, type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setSliderPosition = (index) => {
    let position = "nextSlide";
    if (currentIndex === index) {
      position = "activeSlide";
    }

    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === details.length - 1)
    ) {
      position = "lastSlide";
    }

    return position;
  };

  const validateSlideIndex = (number) => {
    if (number > details.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = details.length - 1;
    }

    return number;
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return validateSlideIndex(newIndex);
      });
    }, 5000);

    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <div className="slider__container">
      <div className="slider__left">
        <div className="image__container">
          {details.map((item, index) => {
            const position = setSliderPosition(index);
            return (
              <div key={item.name} className={`image ${position}`}>
                <img src={item.images.webp} alt={item.name} />
              </div>
            );
          })}
        </div>
      </div>

      {/* slider__right */}
      <div className="slider__right">
        {/* carousel btn */}
        <div className="carousel__btns">
          {details.map((btn, index) => (
            <span
              className={`carousel__btn ${index === currentIndex && "active"}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        <div className="description">
          {details.map((desc, index) => {
            const { role, bio, name } = desc;
            const position = setSliderPosition(index);

            return (
              <div className={`desc__text ${position}`}>
                <h3>{role}</h3>
                <h1>{name}</h1>
                <p>{bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
