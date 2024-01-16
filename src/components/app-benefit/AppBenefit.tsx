import { FC, useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';

import SectionTitlePic from '../UI/section-title-pic/SectionTitlePic';
import SectionListIconText from '../UI/section-list-icon-text/SectionListIconText';

import IconMuscle from '../../images/icons/muscle.svg?react';
import IconCarParking from '../../images/icons/car-parking.svg?react';
import IconShield from '../../images/icons/shield.svg?react';

import TitlePic from '../../assets/images/advantages/title.webp';
import TitlePicSm from '../../assets/images/advantages/title2.webp';
import TitlePicXs from '../../assets/images/advantages/title3.webp';

import styles from './styles.module.scss';
import { CityContext } from '../../context/CityContext';
import { ROUTERS } from '../../utils/routes';

const AppBenefit: FC = () => {
  const pageCity = useContext(CityContext);
  const data = [
    {
      icon: <IconMuscle width={50} height={50} />,
      title: 'Индивидуальный подход тренеров',
      text: 'Команда профессионалов с большим опытом работы',
    },
    {
      icon: <IconCarParking width={50} height={50} />,
      title: 'Бесплатная парковка',
      text: 'Просторная бесплатная парковка рядом с клубом',
    },
    {
      icon: <IconShield width={50} height={50} />,
      title: 'Безопасный фитнес',
      text: 'Трехступенчатая система очистки воды в бассейне современными фильтрами',
    },
  ];
  const dataSpb = [
    {
      icon: <IconMuscle width={50} height={50} />,
      title: 'Индивидуальный подход тренеров',
      text: 'Команда профессионалов с большим опытом работы',
    },
    {
      icon: <IconShield width={50} height={50} />,
      title: 'Комплексный абонемент',
      text: 'В абонемент включено посещение тренажерного зала, кардиозоны, залов групповых программ и разнообразных спа',
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
    height: 170,
    url: TitlePicXs,
  };
  return (
    <section className={styles.benefit}>
      <Container className={styles.container}>
        <SectionTitlePic title="Ваш комфорт" data={dataTitle} img={dataImg} />
        <SectionListIconText
          data={pageCity === ROUTERS.spb.name ? dataSpb : data}
        />
      </Container>
    </section>
  );
};

export default AppBenefit;
