import React, { useState } from 'react';
import { ScrollBtn } from '../shared/ui/ScrollBtn';

export const AboutUs = React.memo(() => {
	const [backgroundPosition, setBackgroundPosition] = useState(0);
	const handleScroll = (direction: 'left' | 'right') => {
		const element = document.getElementById('photoSlider');
		const elementWidth = element ? element.clientWidth : 636;
		const totalSlides = 4;
		const maxScroll = -(elementWidth * (totalSlides - 1));

		if (direction === 'left' && backgroundPosition < 0) {
			setBackgroundPosition((prevPosition) => prevPosition + elementWidth);
		} else if (direction === 'right' && backgroundPosition > maxScroll) {
			setBackgroundPosition((prevPosition) => prevPosition - elementWidth);
		}
	};

	const canScrollLeft = backgroundPosition < 0;
	const canScrollRight =
		backgroundPosition >
		-(document.getElementById('photoSlider')?.clientWidth || 636) * 3;

	return (
		<section
			id="aboutUs"
			className="w-full h-screen px-default max-small:px-modile max-small:h-max"
		>
			<div className="flex items-center justify-around w-full h-full max-small:flex-col max-small:h-max">
				<div className="w-[636px] h-[636px] flex flex-col pt-[40px] max-small:w-full max-small:h-max">
					<div className="mb-[28px]">
						<span className="font-Prosto text-[48px] text-[#000] max-small:text-[24px]">
							О нас
						</span>
						<br />
						<span className="font-Roboto text-[16px] font-regular text-[#000] leading-tight max-small:text-[12px]">
							Барбершоп «re.Fresh» - это уникальное пространство, где стиль и
							традиции встречаются с современностью. Наш барбершоп стремится
							создать уютную и дружелюбную атмосферу, где каждый посетитель
							чувствует себя как дома
						</span>
					</div>
					<div className="flex items-start justify-between font-Roboto font-regular text-[#000] max-small:flex-col max-small:mb-[28px]">
						<div className="w-[294px] max-small:w-full max-small:h-max max-small:mb-[28px]">
							<div className="text-[24px] mb-[8px] max-small:text-[20px]">
								Ценности
							</div>
							<span className="text-[16px] max-small:text-[12px]">
								Мы ценим профессионализм и индивидуальный подход к каждому
								клиенту. Опытные мастера-барберы предлагают высококачественные
								стрижки, бритье, уход за волосами с использованием современных
								технологий и традиционных методов
							</span>
						</div>
						<div className="w-[294px] max-small:w-full max-small:h-max max-small:mb-[28px]">
							<div className="text-[24px] mb-[8px] max-small:text-[20px]">
								Атмосфера
							</div>
							<span className="text-[16px] max-small:text-[12px]">
								У нас дружелюбная атмосфера, где гости не только получают
								качественное обслуживание, но и наслаждаются обществом других
								ценителей стиля
							</span>
						</div>
					</div>
				</div>
				<div
					id="photoSlider"
					className="w-[636px] h-[636px] rounded-img overflow-hidden relative max-small:w-[320px] max-small:h-[320px] max-small:mb-[40px]"
				>
					{canScrollLeft && (
						<div className="absolute left-[20px] top-1/2 z-10 -translate-y-1/2">
							<ScrollBtn
								callBack={handleScroll}
								direction="left"
								bgColor="bg-[#977656]"
							/>
						</div>
					)}
					<div
						className="w-max h-full flex transition-all duration-300"
						style={{ transform: `translateX(${backgroundPosition}px)` }}
					>
						<img
							className="w-[636px] max-small:w-[320px]"
							src="/slider_1.jpg"
							alt=""
						/>
						<img
							className="w-[636px] max-small:w-[320px]"
							src="/slider_2.jpg"
							alt=""
						/>
						<img
							className="w-[636px] max-small:w-[320px]"
							src="/slider_3.jpg"
							alt=""
						/>
						<img
							className="w-[636px] max-small:w-[320px]"
							src="/slider_4.jpg"
							alt=""
						/>
						{/* <img src="/111.png" alt="" />
            <img src="/44.png" alt="" /> */}
					</div>
					{canScrollRight && (
						<div className="absolute right-[20px] top-1/2 z-10 -translate-y-1/2">
							<ScrollBtn
								callBack={handleScroll}
								direction="right"
								bgColor="bg-[#977656]"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
});
