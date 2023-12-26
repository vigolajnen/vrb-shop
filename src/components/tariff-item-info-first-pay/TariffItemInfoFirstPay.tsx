import { FC } from 'react';

import { formatPrice } from '../../utils';
import TariffItemTooltip from '../tariff-item-tooltip/TariffItemTooltip';

import styles from './styles.module.scss';

const TariffItemInfoFirstPay: FC = () => {
  const endDateSale = '29 декабря';
  const priceFirstPay = 990;
  const oldPriceFirstPay = 3900;

  return (
    <div className={styles.info}>
      Первоначальный платеж до {endDateSale} ВСЕГО {formatPrice(priceFirstPay)}{' '}
      ₽ вместо {formatPrice(oldPriceFirstPay)} ₽ только в первый месяц{' '}
      <TariffItemTooltip />
    </div>
  );
};

export default TariffItemInfoFirstPay;
