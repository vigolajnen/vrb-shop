import { FC } from 'react';

import IconLogo from '../../images/logo.svg?react';

interface ILogoProps {
  styles?: string;
}

const Logo: FC<ILogoProps> = ({ styles }) => {
  return <IconLogo width={160} height={27} className={styles} />;
};

export default Logo;
