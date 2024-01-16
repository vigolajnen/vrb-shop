import { ElementType, FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IButtonGradientProps {
  children: string | JSX.Element | JSX.Element[];
  onClick?: any;
  outline: Boolean;
  as?: ElementType;
  style?: string;
}

const ButtonGradient: FC<IButtonGradientProps> = ({
  children,
  as: Tag = 'button',
  onClick,
  outline,
  style,
  ...props
}) => {
  return (
    <Tag
      onClick={onClick}
      className={
        Tag === 'button'
          ? cn('btnReset rounded-pill', styles.button, style)
          : cn('linkReset rounded-pill', styles.button, style)
      }
      data-outline={outline}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default ButtonGradient;
