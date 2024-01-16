import { IClub, IProduct } from '../models';
import { getIdVal } from './form';

export const getClubsAddress = (clubs: IClub[], type: string) => {
  const arr: any = [];
  if (clubs.length <= 0) return;
  clubs.map(c => {
    arr.push({
      id: getIdVal(c.products, type),
      first_pay: c.products.filter(el => el.product_type === 'first_pay'),
      address: c.address,
      name: c.name,
      isPool: c.isPool,
      product: c.products.filter(
        el => el.product_id === getIdVal(c.products, type),
      )[0],
    });
    arr.sort((a: IClub, b: IClub) => (a.address > b.address ? 1 : -1));
  });

  return arr.filter((el: any) => el.id !== '');
};

export const getTariffData = (clubs: IClub[], types: string[]) => {
  if (clubs?.length <= 0 || types.length <= 0) return;
  const arr: any = [];

  const allProducts = clubs.map((el: IClub) => [...el.products]).flat(Infinity);
  const products: any = allProducts.filter(
    (p: any) => p.product_type !== 'first_pay',
  );

  types.map((t: string, i: number) => {
    products.length > 0 &&
      products.filter((p: IProduct) => {
        if (p.product_type === t) {
          arr.push({
            id: i,
            type: p.product_type,
            title: p.product_name,
            price: p.product_price,
            clubs: getClubsAddress(clubs, t),
            countClubs: getClubsAddress(clubs, t).length,
            isPool: getClubsAddress(clubs, t)[0].isPool,
          });
        }
      });
  });

  const result = arr.reduce((o: any, i: any) => {
    if (!o.find((v: any) => v.type == i.type)) {
      o.push(i);
    }
    return o;
  }, []);

  return result;
};

export const getCityPriceList = (arr: string[]) => {
  const arrPriceSort = arr?.map((el: string) => el).sort();
  const result = arrPriceSort?.map((el: string, i: number) =>
    i === arrPriceSort.length - 1 ? el + 'р' : el + 'р/',
  );
  return [arr].length > 0 ? result : null;
};
