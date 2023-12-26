import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export interface ILinkBtnProps {
  id: string;
  url: string;
  style: string;
  children: string;
  outline: Boolean;
}

const LinkBtn: FC<ILinkBtnProps> = ({ url, id, style, children, outline }) => {
  return (
    <a
      id={id}
      href={url}
      className={cn(
        outline ? `${styles.link} ${styles.linkOutline}` : styles.link,
        style,
      )}
    >
      {children}
    </a>
  );
};

export default LinkBtn;
