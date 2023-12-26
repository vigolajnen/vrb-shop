import { FC } from 'react';
import Container from 'react-bootstrap/esm/Container';

import ClubsGalleryZone from '../clubs-gallery-zone/ClubsGalleryZone';

import styles from './styles.module.scss';

interface IAppClubsGallery {
  dataPool: string[];
  dataGym: string[];
  dataSpa: string[];
  dataGroup: string[];
}

const AppClubsGallery: FC<IAppClubsGallery> = ({
  dataPool,
  dataGym,
  dataSpa,
  dataGroup,
}) => {
  return (
    <section className={styles.gallery}>
      <Container className={styles.container}>
        <h3 className={styles.title}>Клубы fitness house</h3>
        {Boolean(dataPool) && [...dataPool].length > 0 ? (
          <ClubsGalleryZone zone="pool" data={dataPool} style={styles.item}>
            <div className={styles.text}>
              <span>Просторный бассейн </span>
              для спортивного и расслабленного плавания{' '}
              <small> (при наличии бассейна в клубе)</small>
            </div>
          </ClubsGalleryZone>
        ) : null}

        {Boolean(dataGym) && [...dataGym].length > 0 ? (
          <ClubsGalleryZone zone="gym" data={dataGym} style={styles.item}>
            <div className={styles.text}>
              ПРОФЕССИОНАЛЬНО ОБОРУДОВАННЫЕ
              <span> И ПРОСТОРНЫЕ ТРЕНАЖЕРНЫЕ ЗАЛЫ </span>
            </div>
          </ClubsGalleryZone>
        ) : null}

        {Boolean(dataSpa) && [...dataSpa].length > 0 ? (
          <ClubsGalleryZone zone="spa" data={dataSpa} style={styles.item}>
            <div className={styles.text}>
              <span>Спа-комплекс </span> финская, русская, турецкая,
              инфракрасная сауны и соляная комната
            </div>
          </ClubsGalleryZone>
        ) : null}

        {Boolean(dataGroup) && [...dataGroup].length > 0 ? (
          <ClubsGalleryZone zone="group" data={dataGroup} style={styles.item}>
            <div className={styles.text}>
              Разнообразные групповые уроки
              <br />
              <span>растяжка, гимнастика, силовые, аквааэробика</span>
            </div>
          </ClubsGalleryZone>
        ) : null}
      </Container>
    </section>
  );
};

export default AppClubsGallery;
