import React from 'react';

export const OurWorks = React.memo(() => {
  return (
    <section
      id="ourWorks"
      className="w-full min-h-screen px-default pt-[80px] mb-[80px]"
    >
      <div className="font-Prosto text-[48px] text-[#000] w-full text-center mb-[40px] max-small:text-[24px] max-small:text-start">
        Наши работы
      </div>
      <div className="flex flex-wrap justify-between"></div>
    </section>
  );
});
