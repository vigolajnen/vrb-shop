import { FC } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import TariffsCarousel from '../tariffs-carousel/TariffsCarousel';
import TariffsList from '../tariffs-list/TariffsList';

const TariffsCarouselOrList: FC<any> = ({ data, count }) => {
  const matches = useMediaQuery('(min-width: 567px)');
  return (
    <>
      {matches ? (
        count > 2 ? (
          <TariffsCarousel data={data} />
        ) : (
          <TariffsList data={data} />
        )
      ) : (
        <TariffsList data={data} />
      )}
    </>
  );
};

export default TariffsCarouselOrList;
