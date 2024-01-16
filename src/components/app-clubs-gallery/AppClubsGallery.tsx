import { FC, useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useMediaQuery } from 'usehooks-ts';

import ClubsGalleryZone from '../clubs-gallery-zone/ClubsGalleryZone';

import styles from './styles.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

interface IAppClubsGallery {
  dataPool: string[];
  dataGym: string[];
  dataSpa: string[];
  dataGroup: string[];
  dataMain: string[];
}

const AppClubsGallery: FC<IAppClubsGallery> = ({
  dataPool,
  dataGym,
  dataSpa,
  dataGroup,
  dataMain,
}) => {
  const theme = useContext(ThemeContext);
  const themeLight = 'light-theme';
  const matches = useMediaQuery('(min-width: 567px)');
  return (
    <section className={styles.gallery}>
      <Container className={styles.container}>
        <h3 className={styles.title}>Клубы fitness house</h3>

        {theme === themeLight ? (
          matches ? (
            Boolean(dataMain) && [...dataMain].length > 0 ? (
              <ClubsGalleryZone
                id="gallery_view_main"
                zone="pool"
                data={dataMain}
                style={styles.item}
              ></ClubsGalleryZone>
            ) : null
          ) : (
            <>
              {Boolean(dataPool) && [...dataPool].length > 0 ? (
                <ClubsGalleryZone
                  id="gallery_view_pool"
                  zone="pool"
                  data={dataPool}
                  style={styles.item}
                >
                  <div className={styles.text}>
                    <span>Просторный бассейн </span>
                    для спортивного и расслабленного плавания{' '}
                    <small> (при наличии бассейна в клубе)</small>
                  </div>
                </ClubsGalleryZone>
              ) : null}

              {Boolean(dataGym) && [...dataGym].length > 0 ? (
                <ClubsGalleryZone
                  id="gallery_view_gym"
                  zone="gym"
                  data={dataGym}
                  style={styles.item}
                >
                  <div className={styles.text}>
                    ПРОФЕССИОНАЛЬНО ОБОРУДОВАННЫЕ
                    <span> И ПРОСТОРНЫЕ ТРЕНАЖЕРНЫЕ ЗАЛЫ </span>
                  </div>
                </ClubsGalleryZone>
              ) : null}

              {Boolean(dataSpa) && [...dataSpa].length > 0 ? (
                <ClubsGalleryZone
                  id="gallery_view_spa"
                  zone="spa"
                  data={dataSpa}
                  style={styles.item}
                >
                  <div className={styles.text}>
                    <span>Спа-комплекс </span> финская, русская, турецкая,
                    инфракрасная сауны и соляная комната
                  </div>
                </ClubsGalleryZone>
              ) : null}

              {Boolean(dataGroup) && [...dataGroup].length > 0 ? (
                <ClubsGalleryZone
                  id="gallery_view_group"
                  zone="group"
                  data={dataGroup}
                  style={styles.item}
                >
                  <div className={styles.text}>
                    Разнообразные групповые уроки
                    <br />
                    <span>растяжка, гимнастика, силовые, аквааэробика</span>
                  </div>
                </ClubsGalleryZone>
              ) : null}
            </>
          )
        ) : (
          <>
            {Boolean(dataPool) && [...dataPool].length > 0 ? (
              <ClubsGalleryZone
                id="gallery_view_pool"
                zone="pool"
                data={dataPool}
                style={styles.item}
              >
                <div className={styles.text}>
                  <span>Просторный бассейн </span>
                  для спортивного и расслабленного плавания{' '}
                  <small> (при наличии бассейна в клубе)</small>
                </div>
              </ClubsGalleryZone>
            ) : null}

            {Boolean(dataGym) && [...dataGym].length > 0 ? (
              <ClubsGalleryZone
                id="gallery_view_gym"
                zone="gym"
                data={dataGym}
                style={styles.item}
              >
                <div className={styles.text}>
                  ПРОФЕССИОНАЛЬНО ОБОРУДОВАННЫЕ
                  <span> И ПРОСТОРНЫЕ ТРЕНАЖЕРНЫЕ ЗАЛЫ </span>
                </div>
              </ClubsGalleryZone>
            ) : null}

            {Boolean(dataSpa) && [...dataSpa].length > 0 ? (
              <ClubsGalleryZone
                id="gallery_view_spa"
                zone="spa"
                data={dataSpa}
                style={styles.item}
              >
                <div className={styles.text}>
                  <span>Спа-комплекс </span> финская, русская, турецкая,
                  инфракрасная сауны и соляная комната
                </div>
              </ClubsGalleryZone>
            ) : null}

            {Boolean(dataGroup) && [...dataGroup].length > 0 ? (
              <ClubsGalleryZone
                id="gallery_view_group"
                zone="group"
                data={dataGroup}
                style={styles.item}
              >
                <div className={styles.text}>
                  Разнообразные групповые уроки
                  <br />
                  <span>растяжка, гимнастика, силовые, аквааэробика</span>
                </div>
              </ClubsGalleryZone>
            ) : null}
          </>
        )}
      </Container>
    </section>
  );
};

export default AppClubsGallery;
