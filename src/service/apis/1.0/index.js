import ApiRequest from "../../request/ApiRequest";
import { urls } from "./urls";

class Apis {
  constructor() {}
  login = data => ApiRequest.post(urls.LOGIN, data);

  /**
   * 产品模块-产品列表 Api 
   */
  //产品列表   &companyTypeId=''&packageState=''&search=''
  productlist = data=>ApiRequest.get(`${urls.PRODUCTLIST}?page=${data.page}&limit=${data.limit}&companyTypeId=${data.companyTypeId}&packageState=${data.packageState}&search=${data.search}`);
  //产品分类列表
  productclassify = data=>ApiRequest.get(`${urls.PRODUCTCLASSIFY}?page=${data.page}&limit=${data.limit}`);
  //产品列表删除
  deleteproductlist = data=> ApiRequest.put(`${urls.DELETEPRODUCTLIST}`,data);
  //新增产品
  addproductlist = data=> ApiRequest.post(`${urls.ADDPRODUCTLIST}`,data);
  //编辑产品
  editproductlist = data => ApiRequest.put(`${urls.EDITPRODUCTLIST}`,data);
  // 开票额度
  getdictlistbytype = data => ApiRequest.get(`${urls.GETDICTLISTBYTYPE}?type=add_product_quota_type`);

  /**
   * 产品模块-产品分类 Api 
   */
  //编辑分类
  updatecompanytype = data=> ApiRequest.put(`${urls.UPDATECOMPANYTYPE}`,data);
  //新增分类
  addcompanytype = data=>ApiRequest.post(`${urls.ADDCOMPANYTYPE}`,data);
  //删除分类
  deletecompanytype = data => ApiRequest.put(`${urls.DELETECOMPANYTYPE}`,data);

  /**
   * 订单模块 Api
   */
  //订单列表
  orderlist = data => ApiRequest.get(`${urls.ORDERLIST}?page=${data.page}&limit=${data.limit}&status=${data.status}&companyTypeId=${data.companyTypeId}&payType=${data.payType}&startDate=${data.startDate}&endDate=${data.endDate}&search=${data.search}`);
  //订单详情
  orderdetail = data => ApiRequest.get(`${urls.ORDERDETAIL}?orderId=${data.orderId}`);
  //订单记录
  orderrecord = data => ApiRequest.get(`${urls.ORDERRECORD}?orderId=${data.orderId}&page=${data.page}&limit=${data.limit}`)
  //确认收款
  comfirmofflinepay = data => ApiRequest.post(`${urls.COMFIRMOFFLINEPAY}`,data);
  //添加备注
  addremark = data=> ApiRequest.put(`${urls.ADDREMARK}`,data);
  //订单修改
  uptorder = data=> ApiRequest.put(`${urls.UPTORDER}`,data);

  /**
   * 公司 API
   */
  //公司列表
  companyweblist = data=> ApiRequest.get(`${urls.COMPANYWEBLIST}?page=${data.page}&limit=${data.limit}&companyStatus=${data.companyStatus}&companyTypeId=${data.companyTypeId}&establishBeginTime=${data.establishBeginTime}&establishEndTime=${data.establishEndTime}&search=${data.search}`);
  //公司详情
  companydetailweb = data=> ApiRequest.get(`${urls.COMPANYDETAILWEB}?companyId=${data.companyId}`);
  //公司操作-基本信息,对接人信息
  getbasiccompany = data=> ApiRequest.get(`${urls.GETBASICCOMPANY}?companyId=${data.companyId}`);
  //公司操作-操作记录
  getcompanyoperaterecord = data=> ApiRequest.get(`${urls.GETCOMPANYOPERATERECORD}?companyId=${data.companyId}`);
  //公司操作头部返回信息
  companyoperatedetail = data=> ApiRequest.get(`${urls.COMPANYOPERATEDETAIL}?companyId=${data.companyId}`);
  //审核通过
  companyoperatepass = data=> ApiRequest.put(`${urls.COMPANYOPERATEPASS}`,data);
  //审核不通过
  companyoperatenopass = data=> ApiRequest.put(`${urls.COMPANYOPERATENOPASS}`,data);
  //复审-资料补全信息
  getcompletedata = data=>ApiRequest.get(`${urls.GETCOMPLETEDATA}?companyId=${data.companyId}`);
  //复审 --通过
  companyreviewoperatepass = data=>ApiRequest.put(`${urls.COMPANYREVIEWOPERATEPASS}`,data);
  //复审--不通过
  companyreviewoperatenopass = data=> ApiRequest.put(`${urls.COMPANYREVIEWOPERATENOPASS}`,data);

  //  //设立
  companyoperateestablish = data=> ApiRequest.put(`${urls.COMPANYOPERATEESTABLISH}`,data);
  //  //驳回
  companyoperatereject = data=> ApiRequest.put(`${urls.COMPANYOPERATEREJECT}`,data);
  //  //锁定
  companyoperatebilllock = data=> ApiRequest.put(`${urls.COMPANYOPERATEBILLLOCK}`,data);
  //发消息给客户
  sendnotice = data=> ApiRequest.post(`${urls.SENDNOTICE}`,data);
  //修改对接人信息
  updatedock =data=> ApiRequest.put(`${urls.UPDATEDOCK}`,data);


  /**
   * 发票
   */
  //发票列表-已开票
  invoicepage = data=> ApiRequest.get(`${urls.INVOICEPAGE}?page=${data.page}&limit=${data.limit}&invoiceType=${data.invoiceType}&companyType=${data.companyType}&date=${data.date}`) ;
  //发票申请列表
  applyinvoicepage = data=>ApiRequest.get(`${urls.APPLYINVOICEPAGE}?page=${data.page}&limit=${data.limit}&invoiceType=${data.invoiceType}&billStatus=${data.billStatus}&companyType=${data.companyType}&date=${data.date}`)
}

export default new Apis();
