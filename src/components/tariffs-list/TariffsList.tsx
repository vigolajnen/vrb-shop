import { FC } from 'react';

import TariffItem from '../tariff-item/TariffItem';

import styles from './styles.module.scss';

const TariffsList: FC<any> = ({ data }) => {
  console.log('list', data);
  return (
    <div className={styles.list}>
      {data.map((el: any, index: number) => (
        <TariffItem data={el} key={index} />
      ))}
    </div>
  );
};

export default TariffsList;
