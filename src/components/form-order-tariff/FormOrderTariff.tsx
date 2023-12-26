import { FC } from 'react';
import { useParams } from 'react-router';

import FormStep from './FormStep';

const FormOrderTariff: FC = () => {
  const id = useParams();
  const tariffData = [
    {
      id: 1,
      price: 2000,
      type: 'full',
      isPool: true,
      clubs: [{ address: '1' }],
    },
    {
      id: 2,
      price: 1000,
      type: 'morning',
      isPool: true,
      clubs: [{ address: '1' }],
    },
    {
      id: 3,
      price: 1000,
      type: 'mc_full',
      isPool: true,
      clubs: [{ address: '1' }],
    },
  ];
  const item = () => tariffData?.find((item: any) => item.id === Number(id.id));

  return <FormStep item={item()} />;
};

export default FormOrderTariff;
