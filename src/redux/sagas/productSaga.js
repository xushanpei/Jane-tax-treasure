import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { productTypes } from "../actions/productAction";
// import { layoutPageTypes } from "../actions/layoutPageAction";
import { message } from "antd";
import Apis from "../../service/apis/1.0";



function* productlist(action) {
  console.log(action.payload)
  try {
   let data = yield call(Apis.productlist,action.payload.data);
   console.log("产品列表",data)
    yield put({ type:productTypes.PRODUCTLIST_SUCCESS,data:data });

  } catch (error) {
    console.log(error)
  } finally {
    
  }
}

function* productclassify(action){
  try {
    let data = yield call(Apis.productclassify);
    console.log("产品分类列表",data)
     yield put({ type:productTypes.PRODUCTCLASSIFY_SUCCESS,data:data });
 
   } catch (error) {
     
   } finally {
     
   }
}

function* deleteproductlist(action){
  try{
    let data = yield call(Apis.deleteproductlist,action.payload.data);
    yield put({ type:productTypes.DELETEPRODUCTLIST_SUCCESS,data:data });
    // console.log("删除信息:",data)
    message.success(data.message)
  }
  catch(error){

  }
}

export default function* watchAuthRoot() {
  yield takeLatest(productTypes.PRODUCTLIST, productlist);
  yield takeLatest(productTypes.PRODUCTCLASSIFY, productclassify)
  yield takeLatest(productTypes.DELETEPRODUCTLIST, deleteproductlist);
}

