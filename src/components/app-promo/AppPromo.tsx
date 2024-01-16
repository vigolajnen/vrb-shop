import { FC } from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/esm/Container';
import { motion } from 'framer-motion';

import ButtonGradient from '../UI/button-gradient/ButtonGradient';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { formatPrice, handleClickScrollToId } from '../../utils';

import styles from './styles.module.scss';

const AppPromo: FC = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const { tariffPriceCity } = useTypedSelector(state => state.price);
  const min =
    tariffPriceCity.length > 0 ? Math.min.apply(null, tariffPriceCity) : '';
  return (
    <section className={styles.promo}>
      <Container className={styles.container}>
        <div className={cn(styles.info)}>
          <motion.h1
            className={cn(styles.title)}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          >
            Абонемент по тарифу "Подписка"
          </motion.h1>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          >
            <p className={cn(styles.text)}>в фитнес-клуб с бассейном</p>
            <div className={cn(styles.price)}>
              ежемесячно за{' '}
              <span className={cn(styles.priceCount)}>
                {min !== '' && formatPrice(min)}
              </span>{' '}
              ₽
            </div>
          </motion.div>
          <ButtonGradient
            as="a"
            outline={true}
            {...{ href: '#tariff', id: 'click_basic_first' }}
            onClick={handleClickScrollToId}
          >
            Подробнее
          </ButtonGradient>
          <div className={cn(styles.warning)}>
            Не плати за год вперед, выбирай подписку на месяц
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppPromo;
