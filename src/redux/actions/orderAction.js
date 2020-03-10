import { createActions } from "redux-actions";

export const orderTypes = {
//产品列表
PRODUCTLIST:"PRODUCTLIST",
PRODUCTLIST_SUCCESS:"PRODUCTLIST_SUCCESS",

};

export default createActions({
[orderTypes.PRODUCTLIST]: data=> ({data}),

});
