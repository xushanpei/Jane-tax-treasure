import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { billTypes } from "../actions/billAction";
// import { layoutPageTypes } from "../actions/layoutPageAction";
import { message } from "antd";
import Apis from "../../service/apis/1.0";



function* invoicepage(action) {
    try {
     let data = yield call(Apis.invoicepage,action.payload.data);
  
      yield put({ type:billTypes.INVOICEPAGE_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* applyinvoicepage(action) {
    try {
     let data = yield call(Apis.applyinvoicepage,action.payload.data);
  
      yield put({ type:billTypes.APPLYINVOICEPAGE_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }





export default function* watchAuthRoot() {
  yield takeLatest(billTypes.INVOICEPAGE, invoicepage);
  yield takeLatest(billTypes.APPLYINVOICEPAGE, applyinvoicepage);
}


// INVOICEPAGE:"INVOICEPAGE",
    // INVOICEPAGE_SUCCESS:"INVOICEPAGE_SUCCESS",
    //APPLYINVOICEPAGE


