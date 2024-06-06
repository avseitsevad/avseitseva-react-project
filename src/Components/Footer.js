import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>О нас</span>
          <span>Помощь</span>
          <span>Поделиться</span>
          <span>Отзывы</span>
          <span>Карьера</span>
        </div>
        <div className="footer-section-columns">
          <span>8 (800) 123-45-67</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Условия использования</span>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
