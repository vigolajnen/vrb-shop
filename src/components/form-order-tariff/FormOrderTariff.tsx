import { FC } from 'react';
import { useParams } from 'react-router';

import FormStep from './FormStep';
import { getTariffData } from '../../utils/tariffs';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const FormOrderTariff: FC = () => {
  const id = useParams();

  const {
    clubsPoolYes,
    clubsPoolNo,
    clubsPremiere,
    tariffTypes,
    tariffsTabs,
    tariffsActiveTab,
  } = useTypedSelector(state => state.price);

  const dataList = [
    {
      tab: tariffsTabs[0],
      list: clubsPremiere,
    },
    {
      tab: tariffsTabs[1],
      list: clubsPoolYes,
    },
    {
      tab: tariffsTabs[2],
      list: clubsPoolNo,
    },
  ];

  const filterDataList = dataList.filter(el => el.tab === tariffsActiveTab);
  const data = filterDataList[0].list;

  const tariffData: any = [];
  data.length > 0 ? tariffData.push(getTariffData(data, tariffTypes)) : null;

  const item = tariffData
    .flat(1)
    ?.find((item: any) => item.id === Number(id.id));

  // console.log('item', item);
  return <FormStep item={item} />;
};

export default FormOrderTariff;
