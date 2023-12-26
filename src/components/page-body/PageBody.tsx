import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IPageBodyProps {
  children: ReactNode;
}

const PageBody: FC<IPageBodyProps> = ({ children }) => {
  return <main className={cn(styles.main)}>{children}</main>;
};

export default PageBody;
