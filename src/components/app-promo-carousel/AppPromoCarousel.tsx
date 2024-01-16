import { FC, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Container, Spinner } from 'react-bootstrap';
import cn from 'classnames';

import { handleClickScrollToId } from '../../utils';
import Carousel from '../UI/carousel/Carousel';

import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './style.module.scss';

interface IPicture {
  sm: string;
  lg: string;
  xl: string;
}

interface PromoCarouselProps {
  data: IPicture[];
}

const AppPromoCarousel: FC<PromoCarouselProps> = forwardRef((props, ref) => {
  const { data } = props;
  const breakpoints = {
    320: {
      slidesPerView: 1,
      freeMode: true,
    },
  };

  const carouselProps = {
    navigation: true,
    pagination: {
      clickable: true,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'fade',
    autoHeight: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    className: 'max-w-screen-2xl mx-auto',
  };

  return (
    <section className={cn(styles.promo, 'w-100 p-0 overflow-hidden')}>
      <Container className="p-0 relative">
        {Boolean(data) && [...data].length > 0 ? (
          <Carousel
            id="promo-carousel"
            breakpoints={breakpoints}
            {...carouselProps}
            ref={ref}
          >
            {[...data].map((el: IPicture, i: number) => (
              <SwiperSlide
                key={i}
                className="overflow-hidden d-flex flex-wrap align-items-end swiper-slide"
              >
                <Link
                  to="#tariff"
                  onClick={handleClickScrollToId}
                  className="d-block w-100 h-100 bg-warning"
                >
                  <picture className="d-block w-100 h-100">
                    <source
                      media="(min-width: 2000px)"
                      srcSet={el.xl}
                      width={1465}
                      height={680}
                    />
                    <source
                      media="(min-width: 700px)"
                      srcSet={el.lg}
                      width={1440}
                      height={800}
                    />
                    <img
                      src={el.sm}
                      className="w-100 h-100"
                      width={500}
                      height={600}
                      alt=""
                    />
                  </picture>
                </Link>
              </SwiperSlide>
            ))}
          </Carousel>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Spinner />
          </div>
        )}
      </Container>
    </section>
  );
});

export default AppPromoCarousel;
