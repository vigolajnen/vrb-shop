import { FC, useContext } from 'react';

import styles from './styles.module.scss';
import { CityContext } from '../../context/CityContext';
import { ROUTERS } from '../../utils/routes';
import TariffItemTooltipSpb from '../tariff-item-tooltip-spb/TariffItemTooltipSpb';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TariffItemClubsList: FC<any> = ({ clubs, type }) => {
  const { tariffsActiveTab } = useTypedSelector(state => state.price);
  const pageCity = useContext(CityContext);
  const isSpb = pageCity === ROUTERS.spb.name;
  const isTooltipSpb =
    pageCity === ROUTERS.spb.name &&
    tariffsActiveTab.toLocaleLowerCase() === 'с бассейном';

  const data = [
    {
      type: 'morning',
      content: (
        <div className={styles.wrapper}>
          <p className="mb-1">
            <b>Тариф дает возможность посещать 1 клуб до 17:00 </b>{' '}
            {isTooltipSpb && <TariffItemTooltipSpb />}
          </p>
          <ul className="my-2">
            {Boolean(clubs) && clubs.length > 0 && !isSpb
              ? clubs.map((club: any, i: number) => (
                  <li key={i}>{club.address}</li>
                ))
              : Boolean(clubs) && clubs.length <= 4 && isSpb
              ? clubs.map((club: any, i: number) => (
                  <li key={i}>{club.address}</li>
                ))
              : null}
          </ul>
        </div>
      ),
    },
    {
      type: 'full',
      content: (
        <div className={styles.wrapper}>
          <p className="mb-1">
            <b>Тариф дает возможность посещать 1 клуб</b>{' '}
            {isTooltipSpb && <TariffItemTooltipSpb />}
          </p>
          <ul className="my-2">
            {Boolean(clubs) && clubs.length > 0 && !isSpb
              ? clubs.map((club: any, i: number) => (
                  <li key={i}>{club.address}</li>
                ))
              : Boolean(clubs) && clubs.length <= 4 && isSpb
              ? clubs.map((club: any, i: number) => (
                  <li key={i}>{club.address}</li>
                ))
              : null}
          </ul>
        </div>
      ),
    },
    {
      type: 'mc_full',
      content: (
        <div className={styles.wrapper}>
          <p className="mb-1">
            {pageCity === ROUTERS.spb.name ? (
              <b>Тариф дает возможность посещать все клубы </b>
            ) : (
              <b>
                Тариф дает возможность посещать{' '}
                {clubs.length > 0 && clubs.length} клуба{' '}
              </b>
            )}

            {pageCity === ROUTERS.spb.name && <TariffItemTooltipSpb />}
          </p>
          <ul className="my-2">
            {Boolean(clubs) && clubs.length > 0 && !isSpb
              ? clubs.map((club: any, i: number) => (
                  <li key={i}>{club.address}</li>
                ))
              : null}
          </ul>
        </div>
      ),
    },
  ];
  return (
    <>
      {clubs.length > 0 && type
        ? data.map((el, i) =>
            el.type === type ? <div key={i}>{el.content}</div> : null,
          )
        : null}
    </>
  );
};

export default TariffItemClubsList;
