import { handleActions } from "redux-actions";
import { productTypes } from "../actions/productAction";
import moment from "moment";
import { Map, fromJS, merge } from "immutable";

const initState = fromJS({
    productlist:[]
});

const productReducer = handleActions(
  {
    [productTypes.PRODUCTLIST_SUCCESS]: (state, action) => {
      return state.merge({
        productlist: action.data
      });
    },
    // [productTypes.SIGN_OUT]: (state, action) => {
    //   return state.merge({
    //     user: null,
    //     token: ""
    //   });
    // }
  },
  initState
);

export default productReducer;
