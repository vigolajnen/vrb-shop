import FormOrderTariffInfo from '../form-order-tariff-info/FormOrderTariffInfo';

export default function StepThreeInner({ price, id, item }: any) {
  const club = item.clubs.filter((el: any) => el.id === id);
  if (!club) {
    throw new Error('Нет данных по клубу');
  }
  return (
    <div className="d-flex justify-content-center">
      <FormOrderTariffInfo price={price} club={club[0]} />
    </div>
  );
}
