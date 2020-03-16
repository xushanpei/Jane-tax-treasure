import { createActions } from "redux-actions";

export const billTypes = {
    //发票列表
    INVOICEPAGE: "INVOICEPAGE",
    INVOICEPAGE_SUCCESS: "INVOICEPAGE_SUCCESS",
    //发票申请列表
    APPLYINVOICEPAGE: "APPLYINVOICEPAGE",
    APPLYINVOICEPAGE_SUCCESS: "APPLYINVOICEPAGE_SUCCESS",
    //发票详情
    BILLINFO: "BILLINFO",
    BILLINFO_SUCCESS: "BILLINFO_SUCCESS",
    //发票审核通过
    AUDITPASS:"AUDITPASS",
    AUDITPASS_SUCCESS:"AUDITPASS_SUCCESS"



};

export default createActions({
    [billTypes.INVOICEPAGE]: data => ({ data }),
    [billTypes.APPLYINVOICEPAGE]: data => ({ data }),
    [billTypes.BILLINFO]: data => ({ data }),
    [billTypes.AUDITPASS]: data => ({ data }),
});

