import React from 'react';

type PropsType = {
  content: string;
  bgColor: string;
  img: string;
  href: string;
};

export const MainButton = React.memo((props: PropsType) => {
  return (
    <a
      className={`w-[200px] cursor-pointer flex items-center justify-around font-bold font-Inter text-[14px] p-[14px] rounded text-button-main-text-color hover:bg-button-main-hover border border-button-main max-small:w-[310px] max-small:h-[48px] max-small:text-[16px] max-small:p-[8px] max-small:justify-center`}
      style={{ background: props.bgColor }}
      href={`${props.href}`}
      target="_blank"
    >
      <img className="mr-[8px]" src={`${props.img}`} alt="иконка" />
      {props.content}
    </a>
  );
});
