import { FC, useContext } from 'react';
import { Scrollbar, Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import { useMediaQuery } from 'usehooks-ts';

import IconTouch from '../../images/icons/icon-touch.svg?react';
import Carousel from '../UI/carousel/Carousel';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import styles from './styles.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

interface IClubsGalleryZone {
  zone: string;
  data: string[];
  children?: React.ReactNode;
  style?: string;
  id?: string;
}

const ClubsGalleryZone: FC<IClubsGalleryZone> = ({
  zone,
  data,
  children,
  style,
  id,
}) => {
  const theme = useContext(ThemeContext);
  const themeLight = 'light-theme';
  const matches = useMediaQuery('(min-width: 1024px)');
  const matchesMob = useMediaQuery('(min-width: 567px)');

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
    navigation: theme === themeLight ? true : false,
    modules: theme === themeLight ? [Scrollbar, Navigation] : [Scrollbar],
  };

  return (
    <div className={style} id={id}>
      <div className={styles.header}>
        {children}
        <div data-zone={zone} className={styles.zone}>
          {matches ? (
            Boolean(data) && [...data].length > 3 ? (
              theme === themeLight && !matchesMob ? (
                <IconTouch width={16} height={16} className={styles.icon} />
              ) : null
            ) : null
          ) : (
            <IconTouch width={16} height={16} className={styles.icon} />
          )}
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
