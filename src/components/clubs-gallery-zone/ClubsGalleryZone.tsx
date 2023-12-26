import { FC } from 'react';
import { Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import IconTouch from '../../images/icons/icon-touch.svg?react';
import Carousel from '../UI/carousel/Carousel';

import 'swiper/css/scrollbar';
import styles from './styles.module.scss';

interface IClubsGalleryZone {
  zone: string;
  data: string[];
  children?: React.ReactNode;
  style?: string;
}

const ClubsGalleryZone: FC<IClubsGalleryZone> = ({
  zone,
  data,
  children,
  style,
}) => {
  const breakpoints = {
    320: {
      slidesPerView: 1.2,
      freeMode: true,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  const carouselProps = {
    slidesPerView: 3,
    scrollbar: {
      draggable: true,
      hide: true,
    },
    modules: [Scrollbar],
  };
  return (
    <div className={style}>
      <div className={styles.header}>
        {children}
        <div data-zone={zone} className={styles.zone}>
          <IconTouch width={16} height={16} className={styles.icon} />
        </div>
      </div>
      <Carousel
        id={`clubs-slider-${zone}`}
        breakpoints={breakpoints}
        {...carouselProps}
      >
        {Boolean(data) && [...data].length > 0
          ? [...data].map((el, index) => (
              <SwiperSlide key={index} className="overflow-hidden rounded-xl">
                <img
                  className={cn(styles.pic, 'rounded fluid')}
                  width={300}
                  height={170}
                  src={el}
                  alt=""
                />
              </SwiperSlide>
            ))
          : null}
      </Carousel>
    </div>
  );
};

export default ClubsGalleryZone;
