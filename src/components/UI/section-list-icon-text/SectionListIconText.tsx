import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IData {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface ISectionListIconTextProps {
  data: IData[];
}

const SectionListIconText: FC<ISectionListIconTextProps> = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((el: IData, i: number) => (
        <li key={i} className={styles.item}>
          <span className={cn(styles.itemIcon)}>{el.icon}</span>
          <span className={cn(styles.itemInner)}>
            <span className={cn(styles.itemTitle)}>{el.title}</span>
            <span className={cn(styles.itemText)}>{el.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SectionListIconText;
