import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Выберите блюда",
      text: "Выберите свои любимые блюда из нашего разнообразного меню. У нас вы найдете как классические гавайские блюда, так и современные интерпретации.",
    },
    {
      image: ChooseMeals,
      title: "Выберите частоту",
      text: "Решите, как часто вы хотите заказывать. Мы предлагаем гибкие варианты доставки, чтобы вы могли получать ваши любимые блюда тогда, когда вам удобно.",
    },
    {
      image: DeliveryMeals,
      title: "Быстрая доставка",
      text: "Получите свои заказы быстро и без задержек. Мы гарантируем свежесть и качество каждого блюда.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Наши принципы</p>
        <h1 className="primary-heading">Что мы предлагаем</h1>
        <p className="primary-text">
          Наш ресторан Aloha Taste предлагает
          простой и удобный способ наслаждаться аутентиными гавайскими блюдами.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
