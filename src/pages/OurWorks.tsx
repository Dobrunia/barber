import React from 'react';
import { PortfolioPhoto } from '../shared/ui/PortfolioPhoto';

export const OurWorks = React.memo(() => {
	return (
		<section
			id="ourWorks"
			className="w-full min-h-screen px-default pt-[80px] mb-[80px]"
		>
			<div className="font-Prosto text-[48px] text-[#000] w-full text-center mb-[40px] max-small:text-[24px] max-small:text-start">
				Наши работы
			</div>
			<a
				href="https://vk.com/albums-225013832"
				target="_blank"
				className="flex flex-wrap justify-start"
			>
				<PortfolioPhoto photoUrl="./photo_1.jpg" />
				<PortfolioPhoto photoUrl="./photo_2.jpg" />
				<PortfolioPhoto photoUrl="./photo_3.jpg" />
				<PortfolioPhoto photoUrl="./photo_4.jpg" />
				<PortfolioPhoto photoUrl="./photo_5.jpg" />
				<PortfolioPhoto photoUrl="./photo_6.jpg" />
				<PortfolioPhoto photoUrl="./photo_7.jpg" />
				<PortfolioPhoto photoUrl="./photo_8.jpg" />
				<PortfolioPhoto photoUrl="./photo_10.jpg" />
				<PortfolioPhoto photoUrl="./photo_11.jpg" />
				<PortfolioPhoto photoUrl="./photo_12.jpg" />
				<PortfolioPhoto photoUrl="./photo_13.jpg" />
				<PortfolioPhoto photoUrl="./photo_14.jpg" />
				<PortfolioPhoto photoUrl="./photo_9.jpg" />
				<div
					className="max-h-[400px] w-[300px] rounded-img mr-[20px] mb-[20px] bg-[#977656] hover:bg-[#755c43] transition-colors text-white text-[24px] font-bold flex items-center justify-center"
					title="Посмотреть все работы"
				>
					{'>'}
				</div>
			</a>
		</section>
	);
});
