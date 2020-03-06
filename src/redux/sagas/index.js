import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import productSaga from "./productSaga"
/*添加对action的监听 */
export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(productSaga)]);
}
