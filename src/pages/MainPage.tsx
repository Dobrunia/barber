import React from 'react';
import { MainButton } from '../shared/ui/MainButton';

export const MainPage = React.memo(() => {
  // const [backgroundColor, setBackgroundColor] = useState('none');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setBackgroundColor('none');
  //     } else {
  //       setBackgroundColor('#191919');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <section
      id="main"
      className="relative bg-center bg-no-repeat bg-cover w-full h-screen rounded-b-backgroundImg px-default max-small:px-modile"
      style={{ backgroundImage: `url('./main.png')` }}
    >
      <img
        className="max-small:absolute max-small:top-[80px] max-small:left-1/2 translate-x-[-50%] max-small:w-[134px] max-small:h-[100px] small:hidden"
        src="/logo.svg"
        alt="логотип"
      />
      <div className="absolute bottom-[60px] left-[60px] max-small:bottom-1/2 max-small:left-1/2 max-small:translate-y-2/4 max-small:translate-x-[-50%] max-small:text-center max-small:w-[307px] max-small:h-[60px]">
        <span className="font-Prosto text-[64px] text-[#FFFFFF] leading-tight max-small:text-[24px] ">
          Объединяем классику <br /> и современность
        </span>
        <br />
        <br />
        <span className="font-Roboto text-[28px] font-regular text-[#FFFFFF] opacity-75 leading-tight max-small:text-[14px]">
          «re.Fresh» — профессиональный барбершоп <br />
          для создания уникального образа!
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-[328px] small:hidden fixed bottom-[24px] right-1/2 max-small:translate-x-[50%] z-[11]">
        {/* <MainButton
          content={'+7 (926) 555 35 35'}
          bgColor={backgroundColor}
          img={'/ion_call.svg'}
          href="tel:+79265553535"
        />
        <br /> */}
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
