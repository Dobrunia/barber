import React from 'react';

type PropsType = {
  callBack: (x: 'left' | 'right') => void;
  direction: 'left' | 'right';
  bgColor: string;
};

export const ScrollBtn = React.memo((props: PropsType) => {
  return (
    <button
      className={`scrollBtn w-[40px] h-[40px] rounded-full flex items-center justify-center ${props.bgColor}`}
      onClick={() => props.callBack(props.direction)}
    >
      <img
        src="/arrow.svg"
        alt=""
        className={props.direction === 'left' ? 'rotate-180' : ''}
      />
    </button>
  );
});
