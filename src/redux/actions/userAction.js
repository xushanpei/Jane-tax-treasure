import { createActions } from "redux-actions";

export const userTypes = {
//产品列表
COUNTSTATUS:"COUNTSTATUS",
COUNTSTATUS_SUCCESS:"COUNTSTATUS_SUCCESS",

};

export default createActions({
[userTypes.COUNTSTATUS]: data=> ({data}),

});
