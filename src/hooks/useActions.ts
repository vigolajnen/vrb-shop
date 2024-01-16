import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { priceActions } from '../store/slices/price.slice';
import { formActions } from '../store/slices/form.slice';

const allActions = {
  ...priceActions,
  ...formActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
