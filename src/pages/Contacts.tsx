import { Placemark, Map, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';

export const Contacts = React.memo(() => {
	return (
		<section
			id="contacts"
			className="w-full h-[576px] px-default pt-[80px] bg-blackBgColor rounded-backgroundImg mb-[80px] max-small:px-modile max-small:pt-[28px] max-small:pb-[28px] max-small:mb-[52px] max-small:h-max max-verySmall:px-[10px]"
		>
			<div className="h-[416px] flex flex-wrap items-center justify-between max-small:h-max max-small:flex-col">
				<div className="w-[491px] h-[312px] flex flex-col flex-wrap items-start justify-center max-small:w-full max-small:h-full max-small:mb-[16px]">
					<div className="font-Prosto text-[48px] text-[#FFF] mb-[8px] max-small:text-[24px]">
						Контакты
					</div>
					<div className="flex flex-wrap items-start justify-between w-[491px] h-[213px] max-small:w-full max-small:h-full">
						<div className="w-[228px] mb-[32px] max-small:w-[161px]">
							<div className="font-Roboto text-[24px] font-regular text-[#FFF] mb-[6px] opacity-65 max-small:text-[20px] max-small:w-[161px]">
								Адрес
							</div>
							<div className="font-Roboto text-[20px] font-regular text-[#FFF] max-small:text-[16px] max-small:w-[161px]">
								Ленинградская обл., <br /> пос. Янино-1,
								<br /> ул. Тюльпанов, д. 1
							</div>
						</div>
						<div className="w-[228px] max-small:w-[161px]">
							<div className="font-Roboto text-[24px] font-regular text-[#FFF] mb-[6px] opacity-65 max-small:text-[20px] max-small:w-[161px]">
								Время работы
							</div>
							<div className="font-Roboto text-[20px] font-regular text-[#FFF] max-small:text-[16px]">
								Ежедневно: 11:00 - 22:00 <br />
							</div>
						</div>
						<div className="w-[228px] max-small:w-[161px]">
							<div className="font-Roboto text-[24px] font-regular text-[#FFF] mb-[6px] opacity-65 max-small:text-[20px] max-small:w-[161px]">
								Телефон
							</div>
							<div className="font-Roboto text-[20px] font-regular text-[#FFF] max-small:text-[16px]">
								<a href="tel:8 995 626 34 28">+7 (995) 626-34-28</a>
							</div>
						</div>
						<div className="w-[228px] max-small:w-[161px]">
							<div className="font-Roboto text-[24px] font-regular text-[#FFF] mb-[6px] opacity-65 max-small:text-[20px]">
								Социальные сети
							</div>
							<div className="font-Roboto text-[20px] font-regular text-[#FFF] flex items-center justify-start max-small:w-[161px]">
								<a
									href="https://vk.com/barber_re.fresh"
									className="mr-[12px]"
									target="_blank"
								>
									<img src="./vk.svg" alt="" />
								</a>
								<a
									href="https://wa.me/79956263428"
									className="mr-[12px]"
									target="_blank"
								>
									<img src="./whatsapp.svg" alt="" />
								</a>
								<a
									href="http://t.me/reFreshBarbershop"
									className="mr-[12px]"
									target="_blank"
								>
									<img src="./telegram.svg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-img overflow-hidden max-small:w-[428px] max-small:h-[428px] max-verySmall:w-[300px] max-verySmall:h-[300px]">
					<YMaps>
						<Map
							defaultState={{
								center: [59.951781, 30.577278],
								zoom: 14,
								controls: ['zoomControl', 'fullscreenControl'],
							}}
							modules={['control.ZoomControl', 'control.FullscreenControl']}
							width={728}
							height={416}
						>
							<Placemark
								modules={['geoObject.addon.balloon']}
								defaultGeometry={[59.951781, 30.577278]}
								properties={{
									balloonContentBody:
										'This is balloon loaded by the Yandex.Maps API module system',
								}}
							/>
						</Map>
					</YMaps>
				</div>
			</div>
		</section>
	);
});
