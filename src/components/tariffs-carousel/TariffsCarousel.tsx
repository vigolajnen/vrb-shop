import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import TariffItem from '../tariff-item/TariffItem';
import Carousel from '../UI/carousel/Carousel';
import Scroll from '../../images/icons/icon-touch.svg?react';

import styles from './styles.module.scss';

const TariffsCarousel: FC<any> = ({ data }) => {
  const list = data;
  // console.log('list', list);
  const carouselProps = {
    slidesPerView: 3,
    spaceBetween: 3,
    modules: [Scrollbar],
    className: 'flex',
  };

  const breakpoints = {
    320: {
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
  return (
    <>
      <Scroll width={30} height={30} className={styles.icon} />
      <Carousel
        id="carousel-tariffs"
        breakpoints={breakpoints}
        {...carouselProps}
      >
        {list?.map((el: any, index: number) => (
          <SwiperSlide key={index} className="flex flex-col h-auto">
            <TariffItem data={el} />
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
};

export default TariffsCarousel;
