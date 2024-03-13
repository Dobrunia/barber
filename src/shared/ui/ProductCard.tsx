import React from 'react';

type PropsType = {
  name: string;
  cost: number;
};

export const ProductCard = React.memo((props: PropsType) => {
  return (
    <div className="productCard cardTitle w-[272px] h-[272px] bg-[#4C4C4C] rounded-backgroundImg p-[20px] mr-[32px] cursor-pointer">
      <div className="font-Roboto text-[16px] font-regular text-[#FFF] mb-[14px] max-small:text-[12px]">
        {props.name}
      </div>
      <div className="font-Roboto text-[24px] font-regular text-[#FFF] max-small:text-[20px]">
        {props.cost} ₽
      </div>
    </div>
  );
});
