import { handleActions } from "redux-actions";
import { billTypes } from "../actions/billAction";
import moment from "moment";
import { Map, fromJS, merge } from "immutable";

const initState = fromJS({
    invoicepage:""
});

const billReducer = handleActions(
  {
    [billTypes.INVOICEPAGE_SUCCESS]: (state, action) => {
        return state.merge({
            invoicepage: action.data
        });
      },
     //APPLYINVOICEPAGE
     [billTypes.APPLYINVOICEPAGE_SUCCESS]: (state, action) => {
        return state.merge({
            applyinvoicepage: action.data
        });
      },

      [billTypes.BILLINFO_SUCCESS]: (state, action) => {
        return state.merge({
          billinfo: action.data
        });
      },

      [billTypes.AUDITPASS_SUCCESS]: (state, action) => {
        return state.merge({
          auditpass: action.data
        });
      },
  },
  initState
);

export default billReducer;

//BILLINFO
//AUDITPASS

