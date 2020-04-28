import { DATA_RECEIVED_INFO } from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => (
  action.type === DATA_RECEIVED_INFO ? action.infoData : state
);
