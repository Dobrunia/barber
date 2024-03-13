import React from 'react';

type PropsType = {
  name: string;
  link: string;
  activeId: string;
};

export const NaVButton = React.memo((props: PropsType) => {
  return (
    <a
      className={`uppercase text-button-nav-text-color font-bold font-Inter text-[12px] hover:text-button-nav-text-color-hover ${props.activeId}  max-small:text-[10px]`}
      href={`${props.link}`}
    >
      {props.name}
    </a>
  );
});
