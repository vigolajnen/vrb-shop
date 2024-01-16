import { FC } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import IconInfo from '../../images/icons/tooltip.svg?react';

import styles from './styles.module.scss';

const TariffItemTooltip: FC = () => {
  const TEXT_TOOLTIP =
    'Первоначальный платеж оплачивается 1 раз в первый месяц и активен весь срок действия вашего договора';

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {TEXT_TOOLTIP}
    </Tooltip>
  );
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button type="button" className={styles.button} aria-label={TEXT_TOOLTIP}>
        <IconInfo width={20} height={20} />
      </button>
    </OverlayTrigger>
  );
};

export default TariffItemTooltip;
