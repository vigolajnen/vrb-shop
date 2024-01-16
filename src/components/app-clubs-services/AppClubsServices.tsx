import { useMediaQuery } from 'usehooks-ts';
import { Container } from 'react-bootstrap';

import ClubsServicesCarousel from '../clubs-services-carousel/ClubsServicesCarousel';
import ClubsServicesList from '../clubs-services-list/ClubsServicesList';

import styles from './style.module.scss';

export default function AppClubsServices() {
  const matches = useMediaQuery('(min-width: 567px) and (max-width: 1200px)');
  return (
    <section className={styles.services}>
      <Container className={styles.wrapper}>
        <div className={`${styles.bgDecor}`}>
          <h2 className={styles.title}>В абонемент включено</h2>
          {matches ? <ClubsServicesCarousel /> : <ClubsServicesList />}
        </div>
      </Container>
    </section>
  );
}
