import { FC } from 'react';
import Container from 'react-bootstrap/esm/Container';

import SectionTitlePic from '../UI/section-title-pic/SectionTitlePic';
import SectionListIconText from '../UI/section-list-icon-text/SectionListIconText';

import IconGym from '../../images/icons/gym.svg?react';
import IconBestPrice from '../../images/icons/best-price.svg?react';
import IconClock from '../../images/icons/clock.svg?react';

import TitlePic from '../../assets/images/profit/title.webp';
import TitlePicSm from '../../assets/images/profit/title2.webp';
import TitlePicXs from '../../assets/images/profit/title3.webp';

import styles from './styles.module.scss';

const AppProfit: FC = (): JSX.Element => {
  const data = [
    {
      icon: <IconGym width={50} height={50} />,
      title: 'все включено, без ограничений',
      text: 'Бассейн, спа, тренажеры, кардиозона, групповые  уроки, шкафчик в просторной раздевалке',
    },
    {
      icon: <IconBestPrice width={50} height={50} />,
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
          <SectionTitlePic title="Ваша выгода" data={dataTitle} img={dataImg} />
          <SectionListIconText data={data} />
        </div>
      </Container>
    </section>
  );
};

export default AppProfit;
