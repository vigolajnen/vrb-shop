import { IService } from '../../models';
import { BASE_URL } from '../../utils/constants';
import { priceApi } from '../api/price.api';

const extendedPriceApi = priceApi.injectEndpoints({
  endpoints: build => ({
    getCities: build.query<IService[], any>({
      query: () => BASE_URL + `data.json`,
      extraOptions: { maxRetries: 10 },
      transformResponse: (response: any) => response.services,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCitiesQuery } = extendedPriceApi;
