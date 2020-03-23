import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { userTypes } from "../actions/userAction";
// import { layoutPageTypes } from "../actions/layoutPageAction";
import { message } from "antd";
import Apis from "../../service/apis/1.0";



function* userpage(action) {
  console.log(action.payload)
  try {
   let data = yield call(Apis.userpage,action.payload.data);
    yield put({ type:userTypes.USERPAGE_SUCCESS,data:data });

  } catch (error) {
    console.log(error)
  } finally {
    
  }
}

function* remove(action) {
    console.log(action.payload)
    try {
     let data = yield call(Apis.remove,action.payload.data);
      yield put({ type:userTypes.REMOVE_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }
  

  function* managerpage(action) {
    console.log(action.payload)
    try {
     let data = yield call(Apis.managerpage,action.payload.data);
      yield put({ type:userTypes.MANAGERPAGE_SUCCESS,data:data });
  
    } catch (error) {
      console.log(error)
    } finally {
      
    }
  }



export default function* watchAuthRoot() {
  yield takeLatest(userTypes.USERPAGE, userpage);
  yield takeLatest(userTypes.REMOVE, remove);
  yield takeLatest(userTypes.MANAGERPAGE, managerpage);
}

//DELETE
//MANAGERPAGE

