import { FC, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Spinner } from 'react-bootstrap';

import TariffsCarouselOrList from '../tariffs-carousel-or-list/TariffsCarouselOrList';

import styles from './styles.module.scss';
import { useActions } from '../../hooks/useActions';
import { CityContext } from '../../context/CityContext';
import { useGetCitiesQuery } from '../../store/slices/citiesSlice';
import { ThemeContext } from '../../context/ThemeContext';

const AppTariffs: FC = () => {
  const theme = useContext(ThemeContext);
  const { data: price, isLoading, isError, error } = useGetCitiesQuery('');
  const pageCity = useContext(CityContext);
  const {
    getActiveCity,
    getActiveCityClubs,
    getTariffTypes,
    getTariffPriceCity,
    getClubsPoolYes,
    getClubsPoolNo,
    getClubsPremiere,
    getClubsMC,
  } = useActions();

  useEffect(() => {
    getActiveCity(pageCity);
    if (price) {
      getActiveCityClubs(price);
      getTariffTypes(price);
      getTariffPriceCity(price);
      getClubsPoolYes(price);
      getClubsPoolNo(price);
      getClubsPremiere(price);
      getClubsMC(price);
    }
  }, [price, pageCity]);

  return (
    <section className={styles.tariffs} id="tariff">
      <Container className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Тарифы</h2>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          ) : isError ? (
            <p>{JSON.stringify(error)}</p>
          ) : Boolean(price) ? (
            <TariffsCarouselOrList />
          ) : null}
        </div>

        {theme !== 'light-theme' && (
          <>
            <div className={styles.bgPic1}></div>
            <div className={styles.bgPic2}></div>
            <div className={styles.bgPic3}></div>
          </>
        )}
      </Container>
    </section>
  );
};

export default AppTariffs;
