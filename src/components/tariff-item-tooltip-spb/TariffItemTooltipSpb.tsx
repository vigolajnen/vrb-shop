import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import IconInfo from '../../images/icons/tooltip.svg?react';

import styles from './styles.module.scss';

export default function TariffItemTooltipSpb() {
  const TEXT_TOOLTIP =
    'Кроме клубов Фитнес Хаус Престиж (ул. Барочная, д.10/2Б, ул. Я. Гашека, 17А, Шереметьевская ул., 13А)';

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
}
