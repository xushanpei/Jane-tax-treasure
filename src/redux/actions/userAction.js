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

};

export default createActions({
[userTypes.USERPAGE]: data=> ({data}),
[userTypes.REMOVE]: data=> ({data}),
[userTypes.MANAGERPAGE]: data=> ({data}),
});
