import { SwiperSlide } from 'swiper/react';

import { CONTENT_LIST } from '../app-clubs-services/data';
import Carousel from '../UI/carousel/Carousel';
import ClubsServicesItem from '../clubs-services-item/ClubsServicesItem';

import Scroll from '../../images/icons/icon-touch.svg?react';

import styles from './style.module.scss';

export default function ClubsServicesCarousel() {
  const data = CONTENT_LIST.filter(el => el.isPool === true)[0].list;
  const carouselProps = {
    slidesPerView: 3,
  };
  const breakpoints = {
    320: {
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.75,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <>
      <Scroll className={styles.scroll} />
      <Carousel
        id="clubs-services-slider"
        breakpoints={breakpoints}
        {...carouselProps}
      >
        {Boolean(data) && [...data].length > 0
          ? [...data].map((el, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <ClubsServicesItem data={el} />
              </SwiperSlide>
            ))
          : null}
      </Carousel>
    </>
  );
}
