import { FC } from 'react';

import styles from './styles.module.scss';

interface ITariffItemServicesListProps {
  title: string;
  isPool: Boolean;
}

const TariffItemServicesList: FC<ITariffItemServicesListProps> = ({
  title,
  isPool,
}) => {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        <li className={styles.item}>Тренажерный зал</li>
        {isPool ? <li className={styles.item}>Бассейн</li> : null}
        <li className={styles.item}>Групповые уроки</li>
        <li className={styles.item}>Спа-комплекс</li>
        <li className={styles.item}>Индивидуальные шкафчики</li>
        <li className={styles.item}>Питьевая вода</li>
      </ul>
    </div>
  );
};

export default TariffItemServicesList;
