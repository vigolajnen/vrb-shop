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
  dataMain,
} from '../components/app-clubs-gallery/data/dataSpb';

import AppPromoCarousel from '../components/app-promo-carousel/AppPromoCarousel';

// @ts-ignore
import slideXL from '../assets/images/promo-carousel/1/3@2x.png?format=webp';
// @ts-ignore
import slideLG from '../assets/images/promo-carousel/1/2@2x.png?format=webp';
// @ts-ignore
import slideSM from '../assets/images/promo-carousel/mob/1.jpg?format=webp';
import AppTimer from '../components/app-timer/AppTimer';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import AppClubsServices from '../components/app-clubs-services/AppClubsServices';

export default function SpbHome() {
  const theme = useContext(ThemeContext);
  const slides = [
    { xl: slideXL, lg: slideLG, sm: slideSM },
    { xl: slideXL, lg: slideLG, sm: slideSM },
    { xl: slideXL, lg: slideLG, sm: slideSM },
  ];

  return (
    <>
      <CityContext.Provider value={ROUTERS.spb.name}>
        <MetaData
          title="Fitness House в Санкт-Петербурге | Безлимитный абонемент за месяц 1500 руб."
          description="Фитнес-клуб с оплатой за месяц 1500 руб. Спа, групповые занятия, тренажерный зал."
        />
        {theme === 'light-theme' && (
          <>
            <AppPromoCarousel data={slides} />
            <AppTimer title="До конца акции осталось:" endDate="17.01.2024" />
          </>
        )}
        {theme !== 'light-theme' && <AppPromo />}
        {theme === 'light-theme' && <AppClubsServices />}
        <AppTariffs />
        <AppProfit />
        <AppClubsGallery
          dataPool={dataPool}
          dataGym={dataGym}
          dataSpa={dataSpa}
          dataGroup={dataGroup}
          dataMain={dataMain}
        />

        {theme !== 'light-theme' && <AppBenefit />}
        <AppFaq />
      </CityContext.Provider>
    </>
  );
}
