import { FC } from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/esm/Container';

import LinkBtn from '../UI/link-btn/LinkBtn';

import styles from './styles.module.scss';

const AppPromo: FC = () => {
  return (
    <section className={styles.promo}>
      <Container className={styles.container}>
        <div className={cn(styles.info)}>
          <h1 className={cn(styles.title)}>Абонемент по тарифу "Подписка"</h1>
          <p className={cn(styles.text)}>в фитнес-клуб с бассейном</p>
          <div className={cn(styles.price)}>ежемесячно за 500h</div>
          <LinkBtn
            url="#tariff"
            id="click_basic_first"
            style="click_buy_prices"
            outline={true}
          >
            Подробнее
          </LinkBtn>
          <div className={cn(styles.warning)}>
            Не плати за год вперед, выбирай подписку на месяц
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppPromo;
