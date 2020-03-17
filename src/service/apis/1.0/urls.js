export const urls = {
  //登录
  LOGIN: "/jwt/token",


  /**
   * 产品模块-产品列表 Api 
   */
  //产品列表
  PRODUCTLIST:"/simpleTax/packageWeb/packageWebList",
  //新增产品
  ADDPRODUCTLIST:"/simpleTax/packageWeb/addPackageWeb",
  //编辑产品
  EDITPRODUCTLIST:"/simpleTax/packageWeb/updatePackageWeb",
  //删除产品
  DELETEPRODUCTLIST:"/simpleTax/packageWeb/deletePackageWeb",
  //产品分类列表
  PRODUCTCLASSIFY:"/simpleTax/companyTypeWeb/companyTypeWebList",
  //开票额度
  GETDICTLISTBYTYPE:"/simpleTax/dictWeb/getDictListByType",

  /**
   * 产品模块-产品分类 Api
   */

   //编辑分类
  UPDATECOMPANYTYPE:"/simpleTax/companyTypeWeb/updateCompanyType",
  //新增分类
  ADDCOMPANYTYPE :"/simpleTax/companyTypeWeb/addCompanyType",
  //删除分类
  DELETECOMPANYTYPE:"/simpleTax/companyTypeWeb/deleteCompanyType",

  /**
   * 订单模块
   */
  //订单列表
  ORDERLIST:"/simpleTax/orderWeb/orderList",
  //订单详情
  ORDERDETAIL:"/simpleTax/orderWeb/orderDetail",
  //订单记录
  ORDERRECORD:"/simpleTax/orderWeb/orderRecord",
  //确认收款
  COMFIRMOFFLINEPAY:"/simpleTax/comfirmOfflinePay",
  //添加备注
  ADDREMARK:"/simpleTax/orderWeb/addRemark",
  //订单修改
  UPTORDER:"/simpleTax/orderWeb/uptOrder",

   /**
   * 公司模块
   */
  //公司列表
  COMPANYWEBLIST:"/simpleTax/companyWeb/companyWebList",
  //公司详情
  COMPANYDETAILWEB:"/simpleTax/companyWeb/companyDetailWeb",
  //公司操作-基本信息,对接人信息
  GETBASICCOMPANY:"/simpleTax/companyWeb/getBasicCompany",
  //公司操作-操作记录
  GETCOMPANYOPERATERECORD:"/simpleTax/companyWeb/getCompanyOperateRecord",
  //公司操作头部返回信息
  COMPANYOPERATEDETAIL:'/simpleTax/companyWeb/companyOperateDetail',
  //审核通过
  COMPANYOPERATEPASS:"/simpleTax/companyWeb/companyOperatePass",
  //审核不通过
  COMPANYOPERATENOPASS:"/simpleTax/companyWeb/companyOperateNoPass",
  ////复审-资料补全信息
  GETCOMPLETEDATA:"/simpleTax/companyWeb/getCompleteData",
  // //复审 --通过
  COMPANYREVIEWOPERATEPASS:"/simpleTax/companyWeb/companyReviewOperatePass",
  //复审--不通过
  COMPANYREVIEWOPERATENOPASS:"/simpleTax/companyWeb/companyReviewOperateNoPass",
  
  //设立
  COMPANYOPERATEESTABLISH:"/simpleTax/companyWeb/companyOperateEstablish",
  //驳回
  COMPANYOPERATEREJECT:"/simpleTax/companyWeb/companyOperateReject",
  //锁定
  COMPANYOPERATEBILLLOCK:"/simpleTax/companyWeb/companyOperateBillLock",
  //发消息给客户
  SENDNOTICE:"/simpleTax/messageWeb/sendNotice",
  //修改对接人信息
  UPDATEDOCK:"/simpleTax/companyWeb/updateDock",

  //名称审核
  NAMEEXAMINE:"/simpleTax/companyWeb/nameExamine",
  //工商阶段完成
  BUSINESSEXAMINE:"/simpleTax/companyWeb/businessExamine",
  //银行开户完成
  ACCOUNTEXAMINE:"/simpleTax/companyWeb/accountExamine",
  //税务认证
  TAXEXAMINE:"/simpleTax/companyWeb/taxExamine",
  /**
   * 法人库
   */
  //获取省市区
  GETREGIONBYPID:"/simpleTax/sAreaWeb/getRegionByPid",
  //法人库列表
  LEGALLIST :"/simpleTax/legalWeb/legalList",
  //法人详情
  LEGALDETAIL:"/simpleTax/legalWeb/legalDetail",
  //法人详情下的公司;列表
  GETCOMPANYBYLEGALID:"/simpleTax/companyWeb/getCompanyByLegalId",
  //锁定法人
  LOCKLEGAL:"/simpleTax/legalWeb/lockLegal",

  /**
   * 发票
   */
  //发票列表-已开票
  INVOICEPAGE:"/simpleTax/billWeb/invoicePage",
  //发票申请列表
  APPLYINVOICEPAGE:"/simpleTax/billWeb/applyInvoicePage",
  //发票详情
  BILLINFO:"/simpleTax/billWeb/billInfo",
  //发票审核通过
  AUDITPASS:"/simpleTax/billWeb/auditPass",
  //开票
  INVOICECOMPLETION:"/simpleTax/billWeb/invoiceCompletion",
  //邮寄
  EXPRESS:"/simpleTax/billWeb/express",
  //驳回
  REJECT:"/simpleTax/billWeb/reject",
  //查看发票
  VIEWINVOICE:"/simpleTax/billWeb/viewInvoice",
};
