import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { productTypes } from "../actions/productAction";
// import { layoutPageTypes } from "../actions/layoutPageAction";
import { message } from "antd";
import Apis from "../../service/apis/1.0";



function* productlist(action) {
  try {
   let data = yield call(Apis.productlist);
   console.log("产品列表",data)
    yield put({ type:productTypes.PRODUCTLIST_SUCCESS,data:data });


//     yield put({
//       type: layoutPageTypes.SET_LOADING,
//       payload: {
//         loading: true
//       }
//     });
//     const res = yield call(Apis.login, action.payload);

//     console.log("触发登录接口状态",res);
//     if(res.status == 200){
//         message.success(res.message);
//     }
//     else{
//       message.warning(res.message)
//     }
//    //设置用户名和 token
//     yield put({
//       type: authTypes.AUTH_SUCCESS,
//       data: {
//         user: {
//           name: res.data.userInfo.name,
//           photo:res.data.userInfo.photo,
//           userId:res.data.userInfo.userId
//         },
//         token: res.data.token
//       }
//     });

    
//     yield put({
//       type: layoutPageTypes.SAVE_MENU_INDEX,
//       payload: {
//         keyPath: ["1"]
//       }
//     });
//     yield put(push("/"));

  } catch (error) {
    // message.info("用户名或密码错误");
    // yield call(clearItem, "token");
  } finally {
    // yield put({
    //   type: layoutPageTypes.SET_LOADING,
    //   payload: {
    //     loading: false
    //   }
    // });
  }
}

export default function* watchAuthRoot() {
  yield takeLatest(productTypes.PRODUCTLIST, productlist);
}
