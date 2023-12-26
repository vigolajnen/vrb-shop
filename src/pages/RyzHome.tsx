import MetaData from '../components/SEO/meta-data/MetaData';
import { CityContext } from '../context/CityContext';
import { ROUTERS } from '../utils/routes';
import AppPromo from '../components/app-promo/AppPromo';
import AppTariffs from '../components/app-tariffs/AppTariffs';
import AppBenefit from '../components/app-benefit/AppBenefit';
import AppClubsGallery from '../components/app-clubs-gallery/AppClubsGallery';
import AppProfit from '../components/app-profit/AppProfit';
import AppFaq from '../components/app-faq/AppFaq';

import {
  dataGroup,
  dataGym,
  dataPool,
  dataSpa,
} from '../components/app-clubs-gallery/data/dataSam';

export default function RyzHome() {
  return (
    <>
      <CityContext.Provider value={ROUTERS.ryz.name}>
        <MetaData
          title="Fitness House в Рязани | Безлимитный абонемент за месяц 1900 руб."
          description="Фитнес-клуб с бассейном с оплатой за месяц 1900 руб. Бассейн, спа, групповые занятия, тренажерный зал."
        />
        <AppPromo />
        <AppTariffs />
        <AppBenefit />
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
