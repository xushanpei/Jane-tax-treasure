import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { userTypes } from "../actions/userAction";
// import { layoutPageTypes } from "../actions/layoutPageAction";
import { message } from "antd";
import Apis from "../../service/apis/1.0";



function* productlist(action) {
//   console.log(action.payload)
//   try {
//    let data = yield call(Apis.productlist,action.payload.data);
//     yield put({ type:userTypes.PRODUCTLIST_SUCCESS,data:data });

//   } catch (error) {
//     console.log(error)
//   } finally {
    
//   }
}


export default function* watchAuthRoot() {
//   yield takeLatest(userTypes.PRODUCTLIST, productlist);
}

