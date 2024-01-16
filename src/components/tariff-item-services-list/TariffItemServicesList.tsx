import { FC, useContext } from 'react';

import styles from './styles.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CityContext } from '../../context/CityContext';
import { ROUTERS } from '../../utils/routes';

interface ITariffItemServicesListProps {
  title: string;
  type: string;
  isPool: Boolean;
}

const TariffItemServicesList: FC<ITariffItemServicesListProps> = ({
  title,
  isPool,
  type,
}) => {
  const pageCity = useContext(CityContext);
  const isSpb = pageCity === ROUTERS.spb.name;
  const { tariffsActiveTab } = useTypedSelector(state => state.price);
  return (
    <div className={styles.info}>
      <h3>{title}</h3>
      <ul className={styles.list}>
        <li className={styles.item}>Тренажерный зал</li>
        {isPool && !isSpb ? <li className={styles.item}>Бассейн</li> : null}

        {isSpb && (type === 'mc_full' || tariffsActiveTab === 'Премьер') ? (
          <li className={styles.item}>
            Бассейн <small>(при наличии в клубе)</small>
          </li>
        ) : isSpb && isPool ? (
          <li className={styles.item}>Бассейн</li>
        ) : null}
        <li className={styles.item}>Групповые уроки</li>
        <li className={styles.item}>Спа-комплекс</li>
        <li className={styles.item}>Индивидуальные шкафчики</li>
        <li className={styles.item}>Питьевая вода</li>
      </ul>
    </div>
  );
};

export default TariffItemServicesList;
