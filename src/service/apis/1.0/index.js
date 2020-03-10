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
  
  
}

export default new Apis();
