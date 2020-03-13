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
      [companyTypes.GETBASICCOMPANY_SUCCESS]: (state, action) => {
        return state.merge({
            getbasiccompany: action.data
        });
      },
      [companyTypes.GETCOMPANYOPERATERECORD_SUCCESS]: (state, action) => {
        return state.merge({
          getcompanyoperaterecord: action.data
        });
      },
      [companyTypes.COMPANYOPERATEDETAIL_SUCCESS]: (state, action) => {
        return state.merge({
          companyoperatedetail: action.data
        });
      },
      [companyTypes.COMPANYOPERATEPASS_SUCCESS]: (state, action) => {
        return state.merge({
          companyoperatepass: action.data
        });
      },
      [companyTypes.COMPANYOPERATENOPASS_SUCCESS]: (state, action) => {
        return state.merge({
          companyoperatenopass: action.data
        });
      },
      [companyTypes.GETCOMPLETEDATA_SUCCESS]: (state, action) => {
        return state.merge({
          getcompletedata: action.data
        });
      },
      [companyTypes.COMPANYREVIEWOPERATEPASS_SUCCESS]: (state, action) => {
        return state.merge({
          companyreviewoperatepass: action.data
        });
      },
      [companyTypes.COMPANYREVIEWOPERATENOPASS_SUCCESS]: (state, action) => {
        return state.merge({
          companyreviewoperatenopass: action.data
        });
      },
  
  },
  initState
);

export default companyReducer;

//公司操作记录
// GETCOMPANYOPERATERECORD:"GETCOMPANYOPERATERECORD",
// GETCOMPANYOPERATERECORD_SUCCESS:"GETCOMPANYOPERATERECORD_SUCCESS",

//COMPANYOPERATEDETAIL
//COMPANYOPERATEPASS
//COMPANYOPERATENOPASS

// GETCOMPLETEDATA:"GETCOMPLETEDATA",
// GETCOMPLETEDATA_SUCCESS:"GETCOMPLETEDATA_SUCCESS"
//COMPANYREVIEWOPERATEPASS
//COMPANYREVIEWOPERATENOPASS

