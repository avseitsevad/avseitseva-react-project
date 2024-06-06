import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Отзывы</p>
        <h1 className="primary-heading">О нас говорят</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Ресторан Aloha Taste - это настоящая находка! 
        Блюда всегда свежие и очень вкусные. Особенно понравились гавайские поке и мясные блюда. Персонал всегда дружелюбный и внимательный. 
        Рекомендую всем, кто хочет попробовать что-то новое и экзотическое!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Петр Иванов</h2>
      </div>
    </div>
  );
};

export default Testimonial;
