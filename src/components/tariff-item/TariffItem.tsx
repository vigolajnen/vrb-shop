import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import cn from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorsFallback from '../errors-fallback/ErrorsFallback';
import TariffItemHeader from '../tariff-item-header/TariffItemHeader';
import TariffItemClubsList from '../tariff-item-clubs-list/TariffItemClubsList';
import TariffItemServicesList from '../tariff-item-services-list/TariffItemServicesList';
import TariffItemInfoFirstPay from '../tariff-item-info-first-pay/TariffItemInfoFirstPay';

import { ROUTERS } from '../../utils/routes';
import { useModal } from '../../hooks/useModal';

import styles from './styles.module.scss';
import { formatPrice } from '../../utils';

const TariffItem: FC<any> = ({ data }) => {
  const { type, price, isPool, clubs } = data;
  const { openModal } = useModal();

  const location = useLocation();
  const url = location.pathname;

  const stateData = [
    {
      url: ROUTERS.spb.url,
      state: { tariff: data, spb_tariffBg: location },
    },
    {
      url: ROUTERS.sam.url,
      state: { tariff: data, sam_tariffBg: location },
    },
    {
      url: ROUTERS.yar.url,
      state: { tariff: data, yar_tariffBg: location },
    },
    {
      url: ROUTERS.arh.url,
      state: { tariff: data, arh_tariffBg: location },
    },
    {
      url: ROUTERS.ijk.url,
      state: { tariff: data, ijk_tariffBg: location },
    },
    {
      url: ROUTERS.kzn.url,
      state: { tariff: data, kzn_tariffBg: location },
    },
    {
      url: ROUTERS.nch.url,
      state: { tariff: data, nch_tariffBg: location },
    },
    {
      url: ROUTERS.goj.url,
      state: { tariff: data, goj_tariffBg: location },
    },
    {
      url: ROUTERS.pes.url,
      state: { tariff: data, pes_tariffBg: location },
    },
    {
      url: ROUTERS.ryz.url,
      state: { tariff: data, ryz_tariffBg: location },
    },
    {
      url: ROUTERS.tol.url,
      state: { tariff: data, tol_tariffBg: location },
    },
    {
      url: ROUTERS.tul.url,
      state: { tariff: data, tul_tariffBg: location },
    },
    {
      url: ROUTERS.uly.url,
      state: { tariff: data, uly_tariffBg: location },
    },
  ];

  return (
    <section
      className={
        type === 'full' ? cn(styles.tariff, styles.active) : styles.tariff
      }
    >
      <div className={styles.wrapper}>
        <TariffItemHeader type={type} />
        <h3 className={styles.title}>Подписка</h3>
        <div className={styles.price}>
          {formatPrice(price)}
          <small>₽/месяц</small>
        </div>
        <TariffItemClubsList clubs={clubs} type={type} />
        <TariffItemInfoFirstPay />

        {stateData.map(el => {
          if (el.url === url) {
            return (
              <ErrorBoundary key={el?.url} FallbackComponent={ErrorsFallback}>
                <Link
                  to={`${data?.id}`}
                  onClick={openModal}
                  state={el.state}
                  className={cn(
                    'linkReset rounded-pill click_buy_prices ',
                    styles.link,
                  )}
                  data-outline={type === 'full' ? true : false}
                >
                  Оформить
                </Link>
              </ErrorBoundary>
            );
          } else null;
        })}

        <TariffItemServicesList
          title="Что входит в абонемент:"
          isPool={isPool}
          type={type}
        />
      </div>
    </section>
  );
};

export default TariffItem;
