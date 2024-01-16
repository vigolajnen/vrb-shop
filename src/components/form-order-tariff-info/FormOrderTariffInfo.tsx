import { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IFormOrderTariffInfoProps {
  price: string | number;
  club: any;
}

const FormOrderTariffInfo: FC<IFormOrderTariffInfoProps> = ({
  price,
  club,
}) => {
  const { address, name, product, first_pay } = club;

  const priceRecurrent =
    first_pay[0] !== undefined ? first_pay[0].product_price : 0;
  const total = +price! + +priceRecurrent!;

  return (
    <div className="py-2 p-sm-2">
      <ul className={styles.list}>
        <li
          className={cn(
            styles.item,
            'd-flex flex-column my-1 p-0 align-items-start',
          )}
        >
          <span>Наименование тарифа</span>
          <span>
            <b>{product.product_name}</b>
          </span>
        </li>
        <li
          className={cn(
            styles.item,
            'd-flex flex-column my-1 p-0 align-items-start',
          )}
        >
          <span>Основной клуб</span>
          <span>
            <b>{name}</b>, <b>{address}</b>
          </span>
        </li>
        <li className={styles.item}>
          <span>Стоимость тарифа</span>
          <span className={styles.price}>
            <b>{price}</b> <small>₽</small>
          </span>
        </li>
        <li className={styles.item}>
          <span>Первоначальный платеж</span>
          <span className={styles.price}>
            <b>{priceRecurrent}</b> <small>₽</small>
          </span>
        </li>
        <li className={styles.item}>
          <span>
            <b>Итого:</b>
            <br />к оплате за первый месяц
          </span>
          <span className={styles.price}>
            <b>{total}</b> <small>₽</small>
          </span>
        </li>
      </ul>
      <p className={styles.text}>
        Ежемесячное списание Подписки со второго месяца будет равно стоимости
        Вашего тарифа {price} ₽
      </p>
    </div>
  );
};

export default FormOrderTariffInfo;
