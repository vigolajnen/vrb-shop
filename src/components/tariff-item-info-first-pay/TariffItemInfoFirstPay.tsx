import { FC } from 'react';

import { formatPrice } from '../../utils';
import TariffItemTooltip from '../tariff-item-tooltip/TariffItemTooltip';

import styles from './styles.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TariffItemInfoFirstPay: FC = () => {
  const { firstPayPrice, oldFirstPayPrice, endDateSale } = useTypedSelector(
    state => state.price,
  );

  return (
    <div className={styles.info}>
      Первоначальный платеж до {endDateSale} ВСЕГО {formatPrice(firstPayPrice)}{' '}
      ₽ вместо {formatPrice(oldFirstPayPrice)} ₽ только в первый месяц{' '}
      <TariffItemTooltip />
    </div>
  );
};

export default TariffItemInfoFirstPay;
