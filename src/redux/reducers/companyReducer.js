import { handleActions } from "redux-actions";
import { companyTypes } from "../actions/companyAction";
import moment from "moment";
import { Map, fromJS, merge } from "immutable";

const initState = fromJS({
 
});

const companyReducer = handleActions(
  {
    [companyTypes.COMPANYWEBLIST_SUCCESS]: (state, action) => {
        return state.merge({
            companyweblist: action.data
        });
      },
      [companyTypes.COMPANYDETAILWEB_SUCCESS]: (state, action) => {
        return state.merge({
            companydetailweb: action.data
        });
      },
  
  },
  initState
);

export default companyReducer;
