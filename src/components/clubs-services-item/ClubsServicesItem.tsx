import { FC } from 'react';
import { IList } from '../app-clubs-services/data';

import styles from './style.module.scss';

interface ClubsServicesItemProps {
  data: IList;
}

const ClubsServicesItem: FC<ClubsServicesItemProps> = ({ data }) => {
  const { title, pic, description } = data;
  return (
    <div className={styles.item} key={title}>
      <div
        className={styles.itemInner}
        style={{ backgroundImage: `url(${pic})` }}
      >
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.text}>{description}</div>
    </div>
  );
};

export default ClubsServicesItem;
