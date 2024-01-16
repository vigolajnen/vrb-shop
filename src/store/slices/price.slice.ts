import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClub, IProduct, IService } from '../../models';

interface PriceState {
  endDateSale: string;
  firstPayPrice: number;
  oldFirstPayPrice: number;
  activeCity: string;
  activeCityClubs: IClub[];
  tariffTypes: any[];
  tariffPriceCity: any[];
  clubsPoolYes: IClub[];
  clubsPoolNo: IClub[];
  clubsPremiere: IClub[];
  clubsMC: IClub[];
  tariffsCity: any;
  tariffsTabs: string[];
  tariffsActiveTab: string;
}

const initialState: PriceState = {
  endDateSale: '17 января',
  firstPayPrice: 1990,
  oldFirstPayPrice: 3900,
  activeCity: '',
  activeCityClubs: [],
  tariffTypes: [],
  tariffPriceCity: [],
  clubsPoolYes: [],
  clubsPoolNo: [],
  clubsPremiere: [],
  clubsMC: [],
  tariffsCity: [],
  tariffsTabs: ['Премьер', 'С бассейном', 'Без бассейна'],
  tariffsActiveTab: 'С бассейном',
};

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    getActiveCity: (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    },
    getActiveCityClubs: (state, action: PayloadAction<IService[]>) => {
      Boolean(action.payload)
        ? (state.activeCityClubs = action.payload.filter(
            (el: IService) => el.city === state.activeCity,
          )[0]?.clubs)
        : null;
    },
    getClubsPremiere: (state, action: PayloadAction<any>) => {
      let clubs = [];
      let result: any = [];

      if (Boolean(action.payload) && action.payload.length > 0) {
        clubs = state.activeCityClubs = action.payload.filter(
          (el: IService) => el.city === state.activeCity,
        )[0]?.clubs;

        const cl1 = clubs?.filter((el: IClub) => el.name === 'FH на Салова');
        const cl2 = clubs?.filter((el: IClub) => el.name === 'FH в Охта Молле');
        result = cl1?.length > 0 && cl2.length > 0 ? [cl1[0], cl2[0]] : [];
      }

      state.clubsPremiere = result?.length > 0 ? result : [];
    },
    getClubsPoolYes: (state, action: PayloadAction<any>) => {
      let clubs = [];
      let result = [];

      if (Boolean(action.payload) && action.payload.length > 0) {
        clubs = state.activeCityClubs = action.payload.filter(
          (el: IService) => el.city === state.activeCity,
        )[0]?.clubs;

        const cl1 = clubs?.filter((el: IClub) => el.name !== 'FH на Салова');
        const cl2 = cl1?.filter((el: IClub) => el.name !== 'FH в Охта Молле');

        result = cl2?.filter((el: IClub) => el.isPool === true);
      }

      state.clubsPoolYes = result?.length > 0 ? result : [];
    },
    getClubsPoolNo: (state, action: PayloadAction<any>) => {
      let clubs = [];
      let result = [];

      if (Boolean(action.payload) && action.payload.length > 0) {
        clubs = state.activeCityClubs = action.payload.filter(
          (el: IService) => el.city === state.activeCity,
        )[0]?.clubs;

        const cl1 = clubs?.filter((el: IClub) => el.name !== 'FH на Салова');
        const cl2 = cl1?.filter((el: IClub) => el.name !== 'FH в Охта Молле');

        result = cl2?.filter((el: IClub) => el.isPool === false);
      }

      state.clubsPoolNo = result?.length > 0 ? result : [];
    },
    getClubsMC: (state, action: PayloadAction<any>) => {
      let clubs = [];
      let result = [];

      if (Boolean(action.payload) && action.payload.length > 0) {
        clubs = state.activeCityClubs = action.payload.filter(
          (el: IService) => el.city === state.activeCity,
        )[0]?.clubs;

        result = clubs?.filter((el: IClub, i: number) => {
          const rr = el.products.filter(val => val.product_type === 'mc_full');

          if (rr.length > 0) {
            return {
              id: i,
              name: el.name,
              address: el.address,
              products: rr,
            };
          }
        });
      }

      state.clubsMC = result?.length > 0 ? result : [];
    },
    getTariffTypes: (state, action: PayloadAction<any>) => {
      const clubs = (state.activeCityClubs = action.payload.filter(
        (el: IService) => el.city === state.activeCity,
      )[0]?.clubs);
      let allCityProducts = [];
      let result = [];
      if (Boolean(clubs) && clubs.length > 0) {
        allCityProducts = clubs
          .map((el: IClub) => [...el.products])
          .flat(Infinity);
        result = allCityProducts
          .map((el: IProduct) => el.product_type)
          .filter((p: string) => p !== 'first_pay');
      }

      state.tariffTypes = [...new Set(result)];
    },
    getTariffPriceCity: (state, action: PayloadAction<any>) => {
      const clubs = (state.activeCityClubs = action.payload.filter(
        (el: IService) => el.city === state.activeCity,
      )[0]?.clubs);
      let allCityProducts = [];
      let allCityProductsNoFirstPay = [];
      let result = [];
      if (Boolean(clubs) && clubs.length > 0) {
        allCityProducts = clubs
          .map((el: IClub) => [...el.products])
          .flat(Infinity);
        allCityProductsNoFirstPay = allCityProducts.filter(
          (p: any) => p.product_type !== 'first_pay',
        );
        result = allCityProductsNoFirstPay.map(
          (el: IProduct) => el.product_price,
        );
      }
      state.tariffPriceCity = [...new Set(result)];
    },
    getTariffs: (state, action: PayloadAction<any>) => {
      state.tariffsCity = action.payload;
    },
    getTariffsActiveTab: (state, action: PayloadAction<any>) => {
      state.tariffsActiveTab = action.payload;
    },
  },
});

export const priceReducer = priceSlice.reducer;
export const priceActions = priceSlice.actions;
