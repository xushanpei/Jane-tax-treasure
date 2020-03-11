import { createActions } from "redux-actions";

export const orderTypes = {
//订单列表列表
ORDERLIST:"ORDERLIST",
ORDERLIST_SUCCESS:"ORDERLIST_SUCCESS",
//订单详情
ORDERDETAIL:"ORDERDETAIL",
ORDERDETAIL_SUCCESS:"ORDERDETAIL_SUCCESS",
//订单记录
ORDERRECORD:"ORDERRECORD",
ORDERRECORD_SUCCESS:"ORDERRECORD_SUCCESS",
//确认收款
COMFIRMOFFLINEPAY:"COMFIRMOFFLINEPAY",
COMFIRMOFFLINEPAY_SUCCESS:"COMFIRMOFFLINEPAY_SUCCESS",
//添加备注
ADDREMARK:"ADDREMARK",
ADDREMARK_SUCCESS:"ADDREMARK_SUCCESS"


};

export default createActions({
[orderTypes.ORDERLIST]: data=> ({data}),
[orderTypes.ORDERDETAIL]: data=> ({data}),
[orderTypes.ORDERRECORD]: data=> ({data}),
[orderTypes.COMFIRMOFFLINEPAY]: data=> ({data}),
[orderTypes.ADDREMARK]: data=> ({data}),
});
