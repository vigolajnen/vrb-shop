import { Suspense, lazy } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

import { ROUTERS } from '../utils/routes';
import { CityContext } from '../context/CityContext';
import MetaData from '../components/SEO/meta-data/MetaData';

const AppPromo = lazy(() => import('../components/app-promo/AppPromo'));
const AppTariffs = lazy(() => import('../components/app-tariffs/AppTariffs'));
const AppBenefit = lazy(() => import('../components/app-benefit/AppBenefit'));
const AppClubsGallery = lazy(
  () => import('../components/app-clubs-gallery/AppClubsGallery'),
);
const AppProfit = lazy(() => import('../components/app-profit/AppProfit'));
const AppFaq = lazy(() => import('../components/app-faq/AppFaq'));

import {
  dataGroup,
  dataGym,
  dataPool,
  dataSpa,
} from '../components/app-clubs-gallery/data/dataSam';

export default function SamHome() {
  return (
    <>
      <CityContext.Provider value={ROUTERS.sam.name}>
        <MetaData
          title="Fitness House в Самаре | Безлимитный абонемент за месяц 1900 руб."
          description="Фитнес-клуб с бассейном с оплатой за месяц 1900 руб. Бассейн, спа, групповые занятия, тренажерный зал."
        />

        <Suspense
          fallback={
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
        >
          <AppPromo />
          <AppTariffs />
          <AppBenefit />
        </Suspense>
        <AppClubsGallery
          dataPool={dataPool}
          dataGym={dataGym}
          dataSpa={dataSpa}
          dataGroup={dataGroup}
        />
        <AppProfit />
        <AppFaq />
      </CityContext.Provider>
    </>
  );
}
