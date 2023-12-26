import { FC } from 'react';

import styles from './styles.module.scss';

const TariffItemClubsList: FC<any> = ({ type, clubs }) => {
  // const { isPremier, isPool } = clubs;
  clubs = [
    {
      address: '111',
    },
    {
      address: '222',
    },
  ];
  const data = [
    {
      type: 'morning',
      content: (
        <div className={styles.wrapper}>
          <p>
            <b>Тариф дает возможность посещать 1 клуб до 17:00</b>
          </p>
          <ul className="my-2">
            {Boolean(clubs) && clubs.length > 0
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
          <p>
            <b>Тариф дает возможность посещать 1 клуб</b>
          </p>
          <ul className="my-2">
            {Boolean(clubs) && clubs.length > 0
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
          <p>
            <b>
              Тариф дает возможность посещать {clubs.length > 0 && clubs.length}
              клуба
            </b>
          </p>
          <ul className="my-2">
            {Boolean(clubs) && clubs.length > 0
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
      {data.map((el, i) =>
        el.type === type ? <div key={i}>{el.content}</div> : null,
      )}
    </>
  );
};

export default TariffItemClubsList;
