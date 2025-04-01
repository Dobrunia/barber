import React from 'react';

type PropsType = {
	photoUrl: string;
};

export const PortfolioPhoto = React.memo((props: PropsType) => {
	const handleClick = () => {
		window.open('https://vk.com/albums-225013832', '_blank');
	};

	return (
		<img
			className="max-h-[400px] w-[300px] rounded-img mr-[20px] mb-[20px] cursor-pointer"
			src={props.photoUrl}
			onClick={handleClick}
		/>
	);
});
