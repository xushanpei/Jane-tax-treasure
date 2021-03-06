import { createActions } from "redux-actions";

export const userTypes = {
//用户列表
USERPAGE:"USERPAGE",
USERPAGE_SUCCESS:"USERPAGE_SUCCESS",
//删除
REMOVE:"REMOVE",
REMOVE_SUCCESS:"REMOVE_SUCCESS",
//客服列表
MANAGERPAGE:"MANAGERPAGE",
MANAGERPAGE_SUCCESS:"MANAGERPAGE_SUCCESS",
//用户详细信息
USERINFO:"USERINFO",
USERINFO_SUCCESS:"USERINFO_SUCCESS",
//订单列表
USERORDERLIST:"USERORDERLIST",
USERORDERLIST_SUCCESS:"USERORDERLIST_SUCCESS",
//启用/冻结
ISUSING:'ISUSING',
ISUSING_SUCCESS:"ISUSING_SUCCESS",
//编辑客服
EDITMANAGE:"EDITMANAGE",
EDITMANAGE_SUCCESS:"EDITMANAGE_SUCCESS",

//新增客服
ADDMANAGE:"ADDMANAGE",
ADDMANAGE_SUCCESS:"ADDMANAGE_SUCCESS",

};

export default createActions({
[userTypes.USERPAGE]: data=> ({data}),
[userTypes.REMOVE]: data=> ({data}),
[userTypes.MANAGERPAGE]: data=> ({data}),
[userTypes.USERINFO]: data=> ({data}),
[userTypes.USERORDERLIST]: data=> ({data}),
[userTypes.ISUSING]: data=> ({data}),
[userTypes.EDITMANAGE]: data=> ({data}),
[userTypes.ADDMANAGE]: data=> ({data}),
});
