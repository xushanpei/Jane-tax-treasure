import { createActions } from "redux-actions";

export const productTypes = {
//产品列表
PRODUCTLIST:"PRODUCTLIST",
PRODUCTLIST_SUCCESS:"PRODUCTLIST_SUCCESS",
//产品分类列表
PRODUCTCLASSIFY:"PRODUCTCLASSIFY",
PRODUCTCLASSIFY_SUCCESS:"PRODUCTCLASSIFY_SUCCESS",
//产品列表删除
DELETEPRODUCTLIST:"DELETEPRODUCTLIST",
DELETEPRODUCTLIST_SUCCESS:"DELETEPRODUCTLIST_SUCCESS"
};

export default createActions({
[productTypes.PRODUCTLIST]: data=> ({data}),
[productTypes.PRODUCTCLASSIFY]: data=> ({data}),
[productTypes.DELETEPRODUCTLIST]: data=> ({data}),
});
