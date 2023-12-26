import { FC } from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion';

import styles from './styles.module.scss';

const AppFaq: FC = () => {
  const data = [
    {
      title: 'В какое время можно посещать клуб?',
      text: (
        <>
          <p>
            В зависимости от выбранного тарифа, посещения до 17:00, либо
            безлимитно в часы работы клуба
          </p>
          <ul>
            <li>- пн-пт с 07:00 до 23:00,</li>
            <li>- сб-вс (и праздничные дни) с 08:00 до 22:00</li>
          </ul>
          <p>В тариф включено посещение всех зон клуба без ограничений.</p>
        </>
      ),
    },
    {
      title: 'Как продлить абонемент?',
      text: <p>Продление абонемента происходит автоматически.</p>,
    },
    {
      title: 'Какие преимущества оплаты тарифа с первоначальным платежом?',
      text: (
        <>
          {/* <p>
            Обязательным условием оплаты тарифа Подписка является оплата
            первоначального платежа в размере {CONTRIBUTION} р.
          </p>
          {Boolean(products) && (
            <p>
              При выборе вида оплаты Подписка, в первый месяц оплачивается тариф
              на выбор {getCityPriceList(products)}, и первоначальный платеж
              ВСЕГО {CONTRIBUTION}р вместо 3900р. Скидка действует до{' '}
              {END_DATE_SALE} 2023г.
            </p>
          )} */}

          <p>
            Со второго месяца автоматически списывается ежемесячная оплата в
            соответствии с выбранным тарифом ранее.
          </p>
          <p>
            Оплата тарифа со первоначальным платежом дает преимущества в виде
            бонусного пакета стартовых тренировок с тренером и гарантированной
            (фиксированной) стоимости ежемесячного платежа на весь период
            действия подписки.
          </p>
        </>
      ),
    },
    {
      title: 'Какие групповые занятия можно посещать?',
      text: <p>Вы можете посещать все бесплатные групповые занятия в клубе.</p>,
    },
    {
      title: 'В стоимость включена ознакомительная тренировка с тренером?',
      text: (
        <p>
          При покупке абонемента вы получите Стартовый пакет тренировок в
          подарок (1 персональная тренировка в тренажерном зале, 1 персональная
          тренировка в бассейне, 1 платное групповое занятие)
        </p>
      ),
    },
    {
      title: 'Есть заморозка абонемента?',
      text: <p>Заморозка абонемента не предусмотрена.</p>,
    },
  ];
  return (
    <section className={cn(styles.faq)} id="faq_view">
      <div className={cn(styles.wrapper)}>
        <Container className={styles.container}>
          <h3 className={cn(styles.title)}>отвечаем на Вопросы</h3>
          <Accordion defaultActiveKey="" className={cn(styles.list)}>
            {data.map((el: any, index: number) => (
              <Accordion.Item
                key={index}
                eventKey={index.toString()}
                className={styles.item}
              >
                <Accordion.Header className={styles.itemHeader}>
                  {el.title}
                </Accordion.Header>
                <Accordion.Body className={styles.itemBody}>
                  {el.text}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
        <div className={styles.bg} tabIndex={-1}>
          <div className={styles.bg1}></div>
        </div>
      </div>
    </section>
  );
};

export default AppFaq;
