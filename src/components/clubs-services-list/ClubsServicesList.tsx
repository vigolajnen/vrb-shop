import { CONTENT_LIST } from '../app-clubs-services/data';
import ClubsServicesItem from '../clubs-services-item/ClubsServicesItem';

import styles from './style.module.scss';

export default function ClubsServicesList() {
  const data = CONTENT_LIST.filter(el => el.isPool === true)[0].list;

  return (
    <ul className={styles.list}>
      {[...data].map(el => (
        <li className={styles.item} key={el.title}>
          <ClubsServicesItem data={el} />
        </li>
      ))}
    </ul>
  );
}
