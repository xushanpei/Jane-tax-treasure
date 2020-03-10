import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { orderTypes } from "../actions/orderAction";
// import { layoutPageTypes } from "../actions/layoutPageAction";
import { message } from "antd";
import Apis from "../../service/apis/1.0";



function* orderlist(action) {
  try {
   let data = yield call(Apis.productlist,action.payload.data);

    yield put({ type:orderTypes.PRODUCTLIST_SUCCESS,data:data });

  } catch (error) {
    console.log(error)
  } finally {
    
  }
}



export default function* watchAuthRoot() {
  yield takeLatest(orderTypes.PRODUCTLIST, orderlist);
 
}

