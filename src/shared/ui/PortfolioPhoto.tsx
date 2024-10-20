import React from 'react';

type PropsType = {
  photoUrl: string;
};

export const PortfolioPhoto = React.memo((props: PropsType) => {
  return <img className="max-h-[400px] w-[300px] rounded-img mr-[20px] mb-[20px]" src={props.photoUrl}></img>;
});
