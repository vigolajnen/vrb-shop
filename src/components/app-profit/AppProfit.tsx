import { FC, useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';

import SectionTitlePic from '../UI/section-title-pic/SectionTitlePic';
import SectionListIconText from '../UI/section-list-icon-text/SectionListIconText';

import IconGym from '../../images/icons/gym.svg?react';
import IconBest from '../../images/icons/icon-best.svg?react';

// @ts-ignore
import IconBestPriceWebp from '../../images/icons/best-price.svg?format=webp';
import IconClock from '../../images/icons/clock.svg?react';

import TitlePic from '../../assets/images/profit/title.webp';
import TitlePicSm from '../../assets/images/profit/title2.webp';
import TitlePicXs from '../../assets/images/profit/title3.webp';

import styles from './styles.module.scss';
import { CityContext } from '../../context/CityContext';
import { ROUTERS } from '../../utils/routes';

import PIC_1 from '../../assets/images/advantages/2/1.webp';
import PIC_2 from '../../assets/images/advantages/2/2.webp';
import PIC_3 from '../../assets/images/advantages/2/3.webp';
import { ThemeContext } from '../../context/ThemeContext';

const AppProfit: FC = (): JSX.Element => {
  const theme = useContext(ThemeContext);
  const pageCity = useContext(CityContext);
  // <img src={IconBestPriceWebp} width={50} height={50} alt="" />
  const data = [
    {
      icon: <IconGym width={50} height={50} />,
      title: 'все включено, без ограничений',
      text: 'Бассейн, спа, тренажеры, кардиозона, групповые  уроки, шкафчик в просторной раздевалке',
    },
    {
      icon: <IconBest width={50} height={50} />,
      title: 'доступная цена',
      text: 'Cпециальный тарифный план со скидками, не нужно платить на год вперед',
    },
    {
      icon: <IconClock width={50} height={50} />,
      title: 'Комфортное продление',
      text: 'Понравилось? Удобное автоматическое списание подписки за абонемент с возможностью отмены в любой момент',
    },
  ];
  const dataSpb = [
    {
      icon: <IconGym width={50} height={50} />,
      title: 'все включено, без ограничений',
      text: 'Cпа, тренажеры, кардиозона, групповые уроки, шкафчик в просторной раздевалке',
    },
    {
      icon: <IconBest width={50} height={50} />,
      title: 'доступная цена',
      text: 'Cпециальный тарифный план со скидками, не нужно платить на год вперед',
    },
    {
      icon: <IconClock width={50} height={50} />,
      title: 'Комфортное продление',
      text: 'Понравилось? Удобное автоматическое списание подписки за абонемент с возможностью отмены в любой момент',
    },
  ];
  const dataTitle = [
    {
      media: '1200px',
      url: TitlePic,
    },
    {
      media: '768px',
      url: TitlePicSm,
    },
  ];
  const dataImg = {
    width: 324,
    height: 217,
    url: TitlePicXs,
  };

  return (
    <section className={styles.profit}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          {theme !== 'light-theme' && (
            <SectionTitlePic
              title="Ваша выгода"
              data={dataTitle}
              img={dataImg}
            />
          )}
          {theme === 'light-theme' && (
            <div className={styles.inner}>
              <h3 className={styles.titleThemeLight}>Ваша выгода</h3>

              <div className={styles.decor}>
                <div
                  className={styles.decor_1}
                  style={{ backgroundImage: `url(${PIC_3})` }}
                ></div>

                <div
                  className={styles.decor_2}
                  style={{ backgroundImage: `url(${PIC_1})` }}
                ></div>

                <div
                  className={styles.decor_3}
                  style={{ backgroundImage: `url(${PIC_2})` }}
                ></div>
              </div>
            </div>
          )}
          <SectionListIconText
            data={pageCity === ROUTERS.spb.name ? dataSpb : data}
          />
        </div>
      </Container>
    </section>
  );
};

export default AppProfit;
