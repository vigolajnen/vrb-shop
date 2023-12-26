import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  style?: string;
  title: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  type,
  style,
  title,
  onClick,
  ...props
}) => {
  return (
    <button type={type} className={cn(styles.button, style)} {...props}>
      {title}
    </button>
  );
};

export default Button;
