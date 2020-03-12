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

  /**
   * 发票
   */
  //发票列表-已开票
  INVOICEPAGE:"/simpleTax/billWeb/invoicePage",
  //发票申请列表
  APPLYINVOICEPAGE:"/simpleTax/billWeb/applyInvoicePage"
};
