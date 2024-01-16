import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { phoneWithoutFormatting } from '../../utils/form';

interface ICustomer {
  first_name: string;
  last_name: string;
  middle_name: string;
  birth_day: string;
  phone: string;
  email: string;
}

interface IProduct {
  product_name: string;
  product_price: number | string;
  product_id: string;
}

interface IOrderData {
  customer: ICustomer | any;
  products: IProduct[];
  recurrentable: Boolean;
}

interface IFormState {
  clubsPositions: any;
  formData: any;
  orderData: IOrderData;
}

const initialState: IFormState = {
  clubsPositions: [],
  formData: [],
  orderData: {
    customer: {},
    products: [],
    recurrentable: true,
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    getFormData: (state, action: PayloadAction<any>) => {
      state.formData = action.payload;
    },
    getCustomer: state => {
      const res = Object.assign(state.orderData.customer, state.formData);
      delete res.isCheck;
      delete res.club_id;
      res.phone = phoneWithoutFormatting(res.phone);
      state.orderData.customer = res;
    },
    getClubsPositions: (state, action: PayloadAction<string>) => {
      state.clubsPositions = action.payload;
    },
    getProductsPosition: (state, action: PayloadAction<any>) => {
      state.orderData.products = [];
      state.orderData.products.push({
        product_name: action.payload.title,
        product_price: action.payload.price,
        product_id: state.formData?.club_id,
      });
      state.orderData.products.filter(val => val !== null);
    },
    getProductsPositionId: (state, action: PayloadAction<any>) => {
      state.orderData.products[0].product_id = action.payload.club_id;
    },
    getProductsPositionFirstPay: (state, action: PayloadAction<string>) => {
      const tt = state.clubsPositions.filter(
        (el: any) => el.id === action.payload,
      )[0]?.first_pay[0];
      delete tt?.product_type;
      state.orderData.products.push(tt);
    },
  },
});

export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions;
