import { FC } from 'react';

import IconSun from '../../images/icons/icon-sun.svg?react';
import IconCheck from '../../images/icons/icon-check.svg?react';
import IconCrown from '../../images/icons/icon-crown.svg?react';

import styles from './styles.module.scss';

const TariffItemHeader: FC<any> = ({ type }) => {
  return (
    <div className={styles.header}>
      {type === 'morning' ? (
        <>
          <IconSun width={36} height={36} className={styles.icon} />
          <div className={styles.info}>
            <b>Утренний в 1 клуб</b>
            <div className={styles.infoUppercase}>Посещение до 17:00</div>
          </div>
        </>
      ) : type === 'full' ? (
        <>
          <IconCheck width={36} height={36} className={styles.icon} />
          <div className={styles.info}>
            <b>Весь день в 1 клуб</b>
            <div className={styles.infoUppercase}>Свободное посещение</div>
          </div>
        </>
      ) : type === 'mc_full' ? (
        <>
          <IconCrown width={36} height={36} />
          <div className={styles.info}>
            <b>Весь день, все клубы</b>
            <div className={styles.infoUppercase}>Свободное посещение</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TariffItemHeader;
