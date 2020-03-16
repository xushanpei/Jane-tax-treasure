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

  function* billinfo(action) {
    try {
     let data = yield call(Apis.billinfo,action.payload.data);
  
      yield put({ type:billTypes.BILLINFO_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* auditpass(action) {
    try {
     let data = yield call(Apis.auditpass,action.payload.data);
  
      yield put({ type:billTypes.AUDITPASS_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }





export default function* watchAuthRoot() {
  yield takeLatest(billTypes.INVOICEPAGE, invoicepage);
  yield takeLatest(billTypes.APPLYINVOICEPAGE, applyinvoicepage);
  yield takeLatest(billTypes.BILLINFO, billinfo);
  yield takeLatest(billTypes.AUDITPASS, auditpass);
}


// INVOICEPAGE:"INVOICEPAGE",
    // INVOICEPAGE_SUCCESS:"INVOICEPAGE_SUCCESS",
    //APPLYINVOICEPAGE
//BILLINFO

// BILLINFO
//AUDITPASS

