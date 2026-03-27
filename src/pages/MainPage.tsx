import React, { useEffect, useState } from 'react';
import { MainButton } from '../shared/ui/MainButton';

export const MainPage = React.memo(() => {
  const [backgroundColor, setBackgroundColor] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setBackgroundColor('none');
      } else {
        setBackgroundColor('#191919');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section
      id="main"
      className="relative bg-center bg-no-repeat bg-cover w-full h-screen rounded-b-backgroundImg px-default max-small:px-modile"
      style={{ backgroundImage: `url('./main.png')` }}
    >
      <div className="max-small:absolute max-small:top-[80px] max-small:left-1/2 max-small:-translate-x-1/2 max-small:flex max-small:items-center max-small:justify-center max-small:w-[134px] max-small:h-[60px] small:hidden">
        <img
          className="max-small:block max-small:w-[104px] max-small:max-h-full max-small:object-contain"
          src="/logo-w.PNG"
          alt="логотип"
        />
      </div>
      <div className="absolute bottom-[60px] left-[60px] max-small:bottom-1/2 max-small:left-1/2 max-small:translate-y-2/4 max-small:translate-x-[-50%] max-small:text-center max-small:w-[min(calc(100vw-40px),480px)]">
        <div className="max-small:rounded-2xl max-small:bg-black/40 max-small:px-4 max-small:py-4 max-small:shadow-sm max-small:ring-1 max-small:ring-white/10 max-small:backdrop-blur-[6px]">
          <span className="font-Prosto text-[64px] text-[#FFFFFF] leading-tight max-small:text-[22px] max-small:leading-snug max-small:drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
            Объединяем классику <br className="max-small:hidden" /> и современность
          </span>
          <br className="max-small:hidden" />
          <br className="max-small:hidden" />
          <span className="font-Roboto text-[28px] font-regular text-[#FFFFFF] opacity-75 leading-tight max-small:text-[14px] max-small:opacity-95 max-small:leading-snug max-small:drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] max-small:mt-2 max-small:inline-block">
            «ре.Фреш» — профессиональный барбершоп{' '}
            <br className="max-small:hidden" />
            для создания уникального образа!
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[328px] small:hidden fixed bottom-[24px] right-1/2 max-small:translate-x-[50%] z-[11]">
        <MainButton
          content={'Позвонить'}
          bgColor={backgroundColor}
          img={'/ion_call.svg'}
          href="tel:+79956263428"
        />
        <br />
        <MainButton
          content={'Записаться онлайн'}
          bgColor={'#977656'}
          img={'/ion_calendar.svg'}
          href="https://n1062799.yclients.com"
        />
      </div>
    </section>
  );
});
