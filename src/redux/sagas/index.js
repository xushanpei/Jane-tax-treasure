import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import productSaga from "./productSaga";
import orderSaga from "./orderSaga";
import companySaga from "./companySaga"
import billSaga from "./billSaga"
/*添加对action的监听 */
export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(productSaga)]);
  yield all([fork(orderSaga)]);
  yield all([fork(companySaga)]);
  yield all([fork(billSaga)]);
}
