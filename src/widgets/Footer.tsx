import React from 'react';

export const Footer = React.memo(() => {
  return (
    <footer className="w-full h-[357px] bg-blackBgColor flex flex-col max-small:p-modile max-small:h-[300px]">
      <div className="w-full h-full flex flex-col flex-wrap items-center justify-center">
        <img
          className="w-[140px] h-[104px] mb-[30px] max-small:w-[62px] max-small:h-[48px]"
          src="./logo.svg"
          alt=""
        />
        <div className="w-[489px] font-Inter text-[16px] text-[#FFF] flex items-center justify-between font-medium mb-[30px] max-small:w-full max-small:text-[12px]">
          <a href="#main">Главная</a>
          <a href="#aboutUs">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#goods">Товары</a>
          <a href="#ourWorks">Портфолио</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className="w-[246px] h-[1px] bg-[#FFF] mb-[30px]"></div>
        <div className="font-Roboro text-[14px] text-[#FFF] mb-[30px] max-small:text-[12px]">
          © «ИП или ООО», 2024
        </div>
      </div>
    </footer>
  );
});
