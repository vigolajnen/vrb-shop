import { FC } from 'react';

import TariffItem from '../tariff-item/TariffItem';

import styles from './styles.module.scss';

const TariffsList: FC<any> = ({ data }) => {
  let list: any = [];
  if (data.length === 1) {
    list = data[0].data;
  } else {
    list = data.data;
  }

  return (
    <div className={styles.list}>
      {list &&
        list.map((el: any, index: number) => (
          <TariffItem data={el} key={index} />
        ))}
    </div>
  );
};

export default TariffsList;
