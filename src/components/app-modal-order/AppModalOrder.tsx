import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Suspense, lazy } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

import { useModal } from '../../hooks/useModal';
import { CityContext } from '../../context/CityContext';

const FormOrderTariff = lazy(
  () => import('../form-order-tariff/FormOrderTariff'),
);
const AppModal = lazy(() => import('../UI/modal/AppModal'));

import styles from './styles.module.scss';

interface IAppModalOrderProps {
  city: string;
}

const AppModalOrder: FC<IAppModalOrderProps> = ({ city }) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const onCloseModal = () => {
    closeModal();
    navigate(-1);
  };

  return (
    <CityContext.Provider value={city}>
      <Suspense
        fallback={
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      >
        <AppModal
          onClose={onCloseModal}
          title="Оформить абонемент"
          style={styles.order}
        >
          <FormOrderTariff />
        </AppModal>
      </Suspense>
    </CityContext.Provider>
  );
};

export default AppModalOrder;
