import { handleActions } from "redux-actions";
import { userTypes } from "../actions/userAction";
import moment from "moment";
import { Map, fromJS, merge } from "immutable";

const initState = fromJS({
    
});

const userReducer = handleActions(
  {
    [userTypes.PRODUCTLIST_SUCCESS]: (state, action) => {
      return state.merge({
        productlist: action.data
      });
    },
 
  },
  initState
);

export default userReducer;
