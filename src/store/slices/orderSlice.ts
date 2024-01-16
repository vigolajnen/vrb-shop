import { priceApi } from '../api/price.api';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const extendedPriceApi = priceApi.injectEndpoints({
  endpoints: build => ({
    createOrder: build.mutation<any, any>({
      query: body => ({
        headers: myHeaders,
        redirect: 'follow',
        url:
          window.location.hostname === 'localhost'
            ? 'http://127.0.0.1:4173/payments/orders/'
            : window.location.origin + '/payments/orders/',
        method: 'POST',
        body: JSON.stringify(body),
        validateStatus: (response, result) => {
          // console.log(response);
          console.log(response.status);

          try {
            if (result.pay_url) {
              window.location = result.pay_url;
            }
          } catch (error) {
            console.error(error);
          }

          return (
            (response.status === 200 || response.status === 302) &&
            !result.isError
          );
        },
      }),
      extraOptions: { maxRetries: 0 },
      transformResponse: (response: any) => response.body,
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation } = extendedPriceApi;
