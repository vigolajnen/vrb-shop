export const formatPrice = (price: number) => {
  let str = price.toString();
  return str.length > 3 ? `${str.slice(0, 1)}.${str.slice(1)}` : str;
};

import { ROUTERS, Route } from './routes';

export const ARR_ROUTERS: [string, Route][] = Object.entries(ROUTERS);
const ARR_ROUTERS_SORT: [string, Route][] = ARR_ROUTERS.sort((a, b) =>
  a[1].name > b[1].name ? 1 : -1,
);

function getCitiesRouters(arr: [string, Route][]): Route[] {
  const CITIES_ROUTERS: Route[] = [];
  arr.map((el: [string, Route]) => {
    return CITIES_ROUTERS.push({
      url: el[1].url,
      name: el[1].name,
    });
  });
  return CITIES_ROUTERS;
}

export const CITIES_ROUTERS: Route[] = getCitiesRouters(ARR_ROUTERS_SORT);

export const handleClickScrollToId = (
  e: React.MouseEvent<HTMLAnchorElement>,
) => {
  const position = e.currentTarget?.href.indexOf('#');
  const el = e.currentTarget?.href.slice(position + 1);
  document
    .querySelector(`[id="${el}"]`)
    ?.scrollIntoView({ behavior: 'smooth' });
};
