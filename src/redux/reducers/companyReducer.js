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

      [companyTypes.COMPANYOPERATEESTABLISH_SUCCESS]: (state, action) => {
        return state.merge({
          companyoperateestablish: action.data
        });
      },
      [companyTypes.COMPANYOPERATEREJECT_SUCCESS]: (state, action) => {
        return state.merge({
          companyoperatereject: action.data
        });
      },
      [companyTypes.COMPANYOPERATEBILLLOCK_SUCCESS]: (state, action) => {
        return state.merge({
          companyoperatebilllock: action.data
        });
      },
      //SENDNOTICE
      [companyTypes.SENDNOTICE_SUCCESS]: (state, action) => {
        return state.merge({
          sendnotice: action.data
        });
      },
      [companyTypes.UPDATEDOCK_SUCCESS]: (state, action) => {
        return state.merge({
          updatedock: action.data
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

// //设立
// COMPANYOPERATEESTABLISH:"COMPANYOPERATEESTABLISH",
// COMPANYOPERATEESTABLISH_SUCCESS:"COMPANYOPERATEESTABLISH_SUCCESS",
// //驳回
// COMPANYOPERATEREJECT:"COMPANYOPERATEREJECT",
// COMPANYOPERATEREJECT_SUCCESS:"COMPANYOPERATEREJECT_SUCCESS",
// //锁定
// COMPANYOPERATEBILLLOCK:"COMPANYOPERATEBILLLOCK",
// COMPANYOPERATEBILLLOCK_SUCCESS:"COMPANYOPERATEBILLLOCK_SUCCESS"

//UPDATEDOCK

