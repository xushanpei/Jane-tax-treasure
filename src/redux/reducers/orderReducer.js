import { handleActions } from "redux-actions";
import { orderTypes } from "../actions/orderAction";
import moment from "moment";
import { Map, fromJS, merge } from "immutable";

const initState = fromJS({
    orderlist:[]
});

const orderReducer = handleActions(
  {
    [orderTypes.PRODUCTLIST_SUCCESS]: (state, action) => {
      return state.merge({
        productlist: action.data
      });
    }
  },
  initState
);

export default orderReducer;
