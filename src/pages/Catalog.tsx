import React from 'react';
import { CatalogCard } from '../shared/ui/CatalogCard';
// import { ProductCard } from '../shared/ui/ProductCard';
// import { ScrollBtn } from '../shared/ui/ScrollBtn';

export const Catalog = React.memo(() => {
  // const [backgroundPosition, setBackgroundPosition] = useState(0);
  // const slideWidth = 304; // ширина каждого слайда 272
  // const step = 1; // шаг передвижения слайдера
  // const handleScroll = (direction: 'left' | 'right') => {
  //   if (direction === 'left' && backgroundPosition < 0) {
  //     setBackgroundPosition((prevPosition) => prevPosition + slideWidth * step);
  //   } else if (direction === 'right') {
  //     setBackgroundPosition((prevPosition) => prevPosition - slideWidth * step);
  //   }
  // };
  return (
    <div className="w-full min-h-screen pl-[128px] pr-[96px] py-[80px] bg-blackBgColor rounded-backgroundImg max-small:pl-modile max-small:pr-0 max-small:py-[32px]">
      <section id="services">
        <div className="font-Prosto text-[48px] text-[#FFF] mb-[52px] max-small:text-[24px]">
          Каталог услуг
        </div>
        <div className="font-Prosto text-[36px] text-[#FFF] mb-[20px] max-small:text-[24px]">
          Барбер
        </div>
        <div className="flex flex-wrap justify-start">
          <CatalogCard
            name="Мужская стрижка / Men's haircut"
            duration="1 час"
            cost={1500}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Удлиненная стрижка / Elongated haircut"
            duration="1 час"
            cost={1700}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Моделирование бороды / Beard modeling"
            duration=""
            cost={1200}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Мужская стрижка + Моделирование бороды / Men's haircut + Beard modeling"
            duration="1 час"
            cost={2200}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Тонирование (камуфляж) волос головы / Toning the head"
            duration=""
            cost={1700}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Тонирование (камуфляж) бороды / Beard toning"
            duration=""
            cost={1500}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Коррекция воском / Wax correction"
            duration=""
            cost={500}
            BgPhoto="./111.png"
          />
        </div>
        <div className="font-Prosto text-[36px] text-[#FFF] mb-[20px] max-small:text-[24px]">
          Топ Барбер
        </div>
        <div className="flex flex-wrap justify-start">
          <CatalogCard
            name="Мужская стрижка / Men's haircut"
            duration="1 час"
            cost={2000}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Удлиненная стрижка / Elongated haircut"
            duration="1 час"
            cost={2200}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Моделирование бороды / Beard modeling"
            duration="~30 мин"
            cost={1500}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Мужская стрижка + Моделирование бороды / Men's haircut + Beard modeling"
            duration="1 час"
            cost={2800}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Тонирование (камуфляж) волос головы / Toning the head"
            duration=""
            cost={2200}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Тонирование (камуфляж) бороды / Beard toning"
            duration=""
            cost={1700}
            BgPhoto="./111.png"
          />
          <CatalogCard
            name="Коррекция воском / Wax correction"
            duration=""
            cost={500}
            BgPhoto="./111.png"
          />
        </div>
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
