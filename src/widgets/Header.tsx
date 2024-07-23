import React, { useState, useEffect } from 'react';
import { NaVButton } from '../shared/ui/NavButton';
import { MainButton } from '../shared/ui/MainButton';

export const Header = React.memo(() => {
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

  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      //const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const id = section.getAttribute('id');
        if (!id) {
          return; // Пропускаем, если id отсутствует
        }
        const { top } = section.getBoundingClientRect();
        const elementHeight = section.clientHeight;
        const windowHeight = window.innerHeight;

        const elementMidpoint = top + elementHeight / 1.5;

        if (elementMidpoint > 0 && elementMidpoint < windowHeight) {
          setActiveId(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="w-full h-[102px] flex items-center justify-between fixed z-50 px-default max-small:h-[54px] max-small:px-modile"
      style={{ background: backgroundColor }}
    >
      <img className="max-small:hidden" src="/logo.svg" alt="логотип" />
      <nav className="flex items-center justify-between w-5/12 min-w-[400px] max-small:w-full max-small:min-w-[300px]">
        <NaVButton
          name="главная"
          link="#main"
          activeId={activeId === 'main' ? 'active' : ''}
        />
        <NaVButton
          name="о нас"
          link="#aboutUs"
          activeId={activeId === 'aboutUs' ? 'active' : ''}
        />
        <NaVButton
          name="услуги"
          link="#services"
          activeId={activeId === 'services' ? 'active' : ''}
        />
        <NaVButton
          name="товары"
          link="#goods"
          activeId={activeId === 'goods' ? 'active' : ''}
        />
        <NaVButton
          name="портфолио"
          link="#ourWorks"
          activeId={activeId === 'ourWorks' ? 'active' : ''}
        />
        <NaVButton
          name="контакты"
          link="#contacts"
          activeId={activeId === 'contacts' ? 'active' : ''}
        />
      </nav>
      <div className="flex items-center justify-between w-[408px] max-small:hidden">
        {/* <MainButton
          content={'+7 (926) 555 35 35'}
          bgColor={backgroundColor}
          img={'/ion_call.svg'}
          href="tel:+79265553535"
        /> */}
        <MainButton
          content={'Записаться онлайн'}
          bgColor={'#977656'}
          img={'/ion_calendar.svg'}
          href="https://n1062799.yclients.com"
        />
      </div>
    </header>
  );
});
