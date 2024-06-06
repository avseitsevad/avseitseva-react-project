import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">О нас</p>
        <h1 className="primary-heading">
          Здоровая еда является важной частью сбалансированного рациона.
        </h1>
        <p className="primary-text">
        В нашем ресторане 'Aloha Taste' вы найдете вкусные и 
        полезные блюда, которые сделают ваш рацион разнообразным и здоровым.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Узнать больше</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Посмотреть ролик
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
