import { FC } from 'react';
import Container from 'react-bootstrap/esm/Container';

import TariffsCarouselOrList from '../tariffs-carousel-or-list/TariffsCarouselOrList';

import styles from './styles.module.scss';

const data = [
  {
    id: 1,
    price: 2000,
    type: 'full',
    isPool: true,
  },
  {
    id: 2,
    price: 1000,
    type: 'morning',
    isPool: true,
  },
  {
    id: 3,
    price: 1000,
    type: 'mc_full',
    isPool: true,
  },
];

const AppTariffs: FC = () => {
  return (
    <section className={styles.tariffs} id="tariff">
      <Container className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Тарифы</h2>
          {Boolean(data) ? (
            <TariffsCarouselOrList data={data} count={data.length} />
          ) : null}
        </div>

        <div className={styles.bgPic1}></div>
        <div className={styles.bgPic2}></div>
        <div className={styles.bgPic3}></div>
      </Container>
    </section>
  );
};

export default AppTariffs;
