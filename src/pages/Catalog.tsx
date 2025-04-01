import React from 'react';
import { CatalogCard } from '../shared/ui/CatalogCard';
import { useServices } from '../shared/api/useServices';
// import { ProductCard } from '../shared/ui/ProductCard';
// import { ScrollBtn } from '../shared/ui/ScrollBtn';

export const Catalog = React.memo(() => {
	const { services, loading, error } = useServices();

	const formatDuration = (seconds: number): string => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);

		if (hours > 0 && minutes > 0) {
			return `${hours} час ${minutes} мин`;
		} else if (hours > 0) {
			return `${hours} час`;
		} else if (minutes > 0) {
			return `${minutes} мин`;
		}
		return '';
	};

	const formatPrice = (min: number, max: number): string => {
		if (min === max) {
			return `${min.toLocaleString()} ₽`;
		}
		return `${min.toLocaleString()} - ${max.toLocaleString()} ₽`;
	};

	const handleBooking = () => {
		window.open(
			'https://n1062799.yclients.com/company/983433/personal/select-services?o=',
			'_blank'
		);
	};

	if (loading) {
		return (
			<div className="w-full min-h-screen pl-[128px] pr-[96px] py-[80px] bg-blackBgColor rounded-backgroundImg max-small:px-5 max-small:py-[32px]">
				<div className="font-Prosto text-[48px] text-[#FFF] mb-[52px] max-small:text-[24px] max-small:text-center">
					Загрузка...
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full min-h-screen pl-[128px] pr-[96px] py-[80px] bg-blackBgColor rounded-backgroundImg max-small:px-5 max-small:py-[32px]">
				<div className="font-Prosto text-[48px] text-[#FFF] mb-[52px] max-small:text-[24px] max-small:text-center">
					Произошла ошибка при загрузке услуг
				</div>
			</div>
		);
	}

	return (
		<div className="w-full min-h-screen pl-[128px] pr-[96px] py-[80px] bg-blackBgColor rounded-backgroundImg max-small:px-5 max-small:py-[32px]">
			<section id="services">
				<div className="font-Prosto text-[48px] text-[#FFF] mb-[52px] max-small:text-[24px] max-small:text-center">
					Каталог услуг
				</div>
				<div className="font-Prosto text-[36px] text-[#FFF] mb-[20px] max-small:text-[24px]"></div>
				<div className="flex flex-wrap justify-start max-small:justify-center">
					{services.map((service) => (
						<CatalogCard
							key={service.id}
							name={service.title}
							duration={
								service.duration
									? `Длительность — ${formatDuration(service.duration)}`
									: ''
							}
							price={formatPrice(service.price_min, service.price_max)}
							BgPhoto={service.image_group?.images.basic.path || './111.png'}
							onClick={handleBooking}
						/>
					))}
				</div>
				{/* <div className="font-Prosto text-[36px] text-[#FFF] mb-[20px] max-small:text-[24px]">
          Топ Барбер
        </div>
        <div className="flex flex-wrap justify-start">
          <CatalogCard
            name="Мужская стрижка / Men's haircut"
            duration="1 час"
            // cost={2000}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Удлиненная стрижка / Elongated haircut"
            duration="1 час"
            // cost={2200}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Моделирование бороды / Beard modeling"
            duration="~30 мин"
            // cost={1500}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Мужская стрижка + Моделирование бороды / Men's haircut + Beard modeling"
            duration="1 час"
            // cost={2800}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Тонирование (камуфляж) волос головы / Toning the head"
            duration=""
            // cost={2200}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Тонирование (камуфляж) бороды / Beard toning"
            duration=""
            // cost={1700}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Коррекция воском / Wax correction"
            duration=""
            // cost={500}
            BgPhoto="./111.png"
          />
        </div> */}
			</section>
			{/* <section id="goods">
        <div className="font-Prosto text-[48px] text-[#FFF] mt-[80px] mb-[52px] flex items-center justify-between max-small:text-[24px]">
          Товары
          <div className="w-[96px] flex items-center justify-between max-small:mr-[20px]">
            <ScrollBtn
              callBack={handleScroll}
              direction="left"
              bgColor="bg-[#494949]"
            />
            <ScrollBtn
              callBack={handleScroll}
              direction="right"
              bgColor="bg-[#494949]"
            />
          </div>
        </div>
        <div className="w-full h-[272px] overflow-hidden">
          <div
            className="flex flex-nowrap justify-between w-max h-full transition-all duration-300"
            style={{ transform: `translateX(${backgroundPosition}px)` }}
          >
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
            <ProductCard
              name="Тоник для ухода за волосами Morgans 250 мл"
              cost={2100}
            />
          </div>
        </div>
      </section> */}
		</div>
	);
});
