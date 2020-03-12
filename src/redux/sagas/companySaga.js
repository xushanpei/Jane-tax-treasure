import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { companyTypes } from "../actions/companyAction";
// import { layoutPageTypes } from "../actions/layoutPageAction";
import { message } from "antd";
import Apis from "../../service/apis/1.0";



function* companyweblist(action) {
    try {
     let data = yield call(Apis.companyweblist,action.payload.data);
  
      yield put({ type:companyTypes.COMPANYWEBLIST_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* companydetailweb(action) {
    try {
     let data = yield call(Apis.companydetailweb,action.payload.data);
  
      yield put({ type:companyTypes.COMPANYDETAILWEB_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }



export default function* watchAuthRoot() {
  yield takeLatest(companyTypes.COMPANYWEBLIST, companyweblist);
  yield takeLatest(companyTypes.COMPANYDETAILWEB, companydetailweb);

}



