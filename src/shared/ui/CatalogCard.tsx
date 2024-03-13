import React from 'react';

type PropsType = {
  name: string;
  duration: string;
  cost: number;
  BgPhoto: string;
};

export const CatalogCard = React.memo((props: PropsType) => {
  return (
    <div
      className={`w-[272px] h-[354px] p-[18px] productCard cardTitle cursor-pointer rounded-img flex items-end justify-start mr-[32px] mb-[32px] max-small:w-[150px] max-small:h-[216px] max-small:p-[10px] max-small:mr-[20px] max-small:mb-[20px]`}
      style={{
        backgroundImage: `url(${props.BgPhoto})`,
        filter: 'brightness(100%) saturate(100%) contrast(100%)',
      }}
    >
      <div className="font-Inter font-regular text-[#FFF]">
        <div className="text-[20px] leading-tight max-small:text-[14px]">
          {props.name}
        </div>
        <div className="text-[12px] opacity-65 mb-[8px] max-small:text-[10px]">
          Длительность — {props.duration}
        </div>
        <div className="text-[24px] max-small:text-[16px]">{props.cost} ₽</div>
      </div>
    </div>
  );
});
