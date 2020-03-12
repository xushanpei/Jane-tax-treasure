import { createActions } from "redux-actions";

export const companyTypes = {
//公司列表
COMPANYWEBLIST:"COMPANYWEBLIST",
COMPANYWEBLIST_SUCCESS:"COMPANYWEBLIST_SUCCESS",
//公司详情
COMPANYDETAILWEB:"COMPANYDETAILWEB",
COMPANYDETAILWEB_SUCCESS:"COMPANYDETAILWEB_SUCCESS",
//公司操作-基本信息,对接人信息
GETBASICCOMPANY:"GETBASICCOMPANY",
GETBASICCOMPANY_SUCCESS:"GETBASICCOMPANY_SUCCESS",


};

export default createActions({
[companyTypes.COMPANYWEBLIST]: data=> ({data}),
[companyTypes.COMPANYDETAILWEB]: data=> ({data}),
[companyTypes.GETBASICCOMPANY]: data=> ({data}),
});

