import { FC, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { motion } from 'framer-motion';

import { CityContext } from '../../context/CityContext';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { getTariffData } from '../../utils/tariffs';

import FiltersTab from '../filters-tab/FiltersTab';
import TariffsCarousel from '../tariffs-carousel/TariffsCarousel';
import TariffsList from '../tariffs-list/TariffsList';

const TariffsCarouselOrList: FC<any> = () => {
  const pageCity = useContext(CityContext);
  const [active, setActive] = useState(1);
  const matches = useMediaQuery('(min-width: 567px)');

  const {
    tariffTypes,
    clubsPoolNo,
    clubsPoolYes,
    clubsPremiere,
    tariffsTabs,
    activeCity,
  } = useTypedSelector(state => state.price);
  const { getTariffs } = useActions();
  const count = tariffTypes.length;

  const dataTariffsPoolNo: any = [];
  const dataTariffsPoolYes: any = [];
  const dataTariffsPremiere: any = [];

  clubsPoolNo.length > 0
    ? dataTariffsPoolNo.push(getTariffData(clubsPoolNo, tariffTypes))
    : null;
  clubsPoolYes.length > 0
    ? dataTariffsPoolYes.push(getTariffData(clubsPoolYes, tariffTypes))
    : null;
  clubsPremiere.length > 0
    ? dataTariffsPremiere.push(getTariffData(clubsPremiere, tariffTypes))
    : null;

  const allData = [
    {
      tab: tariffsTabs[0],
      data: dataTariffsPremiere.flat(Infinity),
    },
    {
      tab: tariffsTabs[1],
      data: dataTariffsPoolYes.flat(Infinity),
    },
    {
      tab: tariffsTabs[2],
      data: dataTariffsPoolNo.flat(Infinity),
    },
  ];

  useEffect(() => {
    if (pageCity === activeCity) {
      Boolean(allData) && allData.length > 0 && getTariffs(allData);
    }
  }, [pageCity, activeCity]);

  const data = allData.filter(el => el.data.length !== 0);

  const dataFilterTab = [
    {
      name: allData[0].tab,
      content: matches ? (
        count > 2 ? (
          <TariffsCarousel data={allData[0]} />
        ) : (
          <TariffsList data={allData[0]} />
        )
      ) : (
        <TariffsList data={allData[0]} />
      ),
    },
    {
      name: allData[1].tab,
      content: matches ? (
        count > 2 ? (
          <TariffsCarousel data={allData[1]} />
        ) : (
          <TariffsList data={allData[1]} />
        )
      ) : (
        <TariffsList data={allData[1]} />
      ),
    },
    {
      name: allData[2].tab,
      content: matches ? (
        count > 2 ? (
          <TariffsCarousel data={allData[2]} />
        ) : (
          <TariffsList data={allData[2]} />
        )
      ) : (
        <TariffsList data={allData[2]} />
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.length === 1 ? (
        matches ? (
          count > 2 ? (
            <TariffsCarousel data={data} />
          ) : (
            <TariffsList data={data} />
          )
        ) : (
          <TariffsList data={data} />
        )
      ) : null}
      {data.length >= 2 && (
        <FiltersTab
          data={dataFilterTab}
          active={active}
          setActive={setActive}
        />
      )}
    </motion.div>
  );
};

export default TariffsCarouselOrList;
