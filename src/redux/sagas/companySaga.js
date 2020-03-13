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

  function* getbasiccompany(action) {
    try {
     let data = yield call(Apis.getbasiccompany,action.payload.data);
  
      yield put({ type:companyTypes.GETBASICCOMPANY_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* getcompanyoperaterecord(action) {
    try {
     let data = yield call(Apis.getcompanyoperaterecord,action.payload.data);
  
      yield put({ type:companyTypes.GETCOMPANYOPERATERECORD_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* companyoperatedetail(action) {
    try {
     let data = yield call(Apis.companyoperatedetail,action.payload.data);
  
      yield put({ type:companyTypes.COMPANYOPERATEDETAIL_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* companyoperatepass(action) {
    try {
     let data = yield call(Apis.companyoperatepass,action.payload.data);
  
      yield put({ type:companyTypes.COMPANYOPERATEPASS_SUCCESS,data:data });
      message.success(data.message)
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* companyoperatenopass(action) {
    try {
     let data = yield call(Apis.companyoperatenopass,action.payload.data);
  
      yield put({ type:companyTypes.COMPANYOPERATENOPASS_SUCCESS,data:data });
      // message.success(data.message)
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* getcompletedata(action) {
    try {
     let data = yield call(Apis.getcompletedata,action.payload.data);
  
      yield put({ type:companyTypes.GETCOMPLETEDATA_SUCCESS,data:data });
      // message.success(data.message)
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }

  function* companyreviewoperatepass(action) {
    try {
     let data = yield call(Apis.companyreviewoperatepass,action.payload.data);
  
      yield put({ type:companyTypes.COMPANYREVIEWOPERATEPASS_SUCCESS,data:data });
      // message.success(data.message)
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }


  function* companyreviewoperatenopass(action) {
    try {
     let data = yield call(Apis.companyreviewoperatenopass,action.payload.data);
  
      yield put({ type:companyTypes.COMPANYREVIEWOPERATENOPASS_SUCCESS,data:data });
      // message.success(data.message)
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }


export default function* watchAuthRoot() {
  yield takeLatest(companyTypes.COMPANYWEBLIST, companyweblist);
  yield takeLatest(companyTypes.COMPANYDETAILWEB, companydetailweb);
  yield takeLatest(companyTypes.GETBASICCOMPANY, getbasiccompany);
  yield takeLatest(companyTypes.GETCOMPANYOPERATERECORD, getcompanyoperaterecord);
  yield takeLatest(companyTypes.COMPANYOPERATEDETAIL, companyoperatedetail);
  yield takeLatest(companyTypes.COMPANYOPERATEPASS, companyoperatepass);
  yield takeLatest(companyTypes.COMPANYOPERATENOPASS, companyoperatenopass);

  yield takeLatest(companyTypes.GETCOMPLETEDATA, getcompletedata);
  yield takeLatest(companyTypes.COMPANYREVIEWOPERATEPASS, companyreviewoperatepass);
  yield takeLatest(companyTypes.COMPANYREVIEWOPERATENOPASS, companyreviewoperatenopass);
}
//公司操作记录
// GETCOMPANYOPERATERECORD:"GETCOMPANYOPERATERECORD",
// GETCOMPANYOPERATERECORD_SUCCESS:"GETCOMPANYOPERATERECORD_SUCCESS",
//COMPANYOPERATEDETAIL
//COMPANYOPERATEPASS
//COMPANYOPERATENOPASS

// getcompletedata
//COMPANYREVIEWOPERATEPASS
//COMPANYREVIEWOPERATENOPASS




