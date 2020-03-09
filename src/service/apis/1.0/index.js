import ApiRequest from "../../request/ApiRequest";
import { urls } from "./urls";

class Apis {
  constructor() {}
  login = data => ApiRequest.post(urls.LOGIN, data);
  // getTree = data => ApiRequest.get(`${urls.USER_TREERESOURCE}?deepNum=10&pid=0`);
  // PRODUCTLIST:"/simpleTax/packageWeb/packageWebList",
  // //新增产品
  // ADDPRODUCTLIST:"/simpleTax/packageWeb/addPackageWeb",
  // //编辑产品
  // EDITPRODUCTLIST:"/simpleTax/packageWeb/updatePackageWeb",
  // //删除产品
  // DELETEPRODUCTLIST:"/simpleTax/packageWeb/deletePackageWeb",

  /**
   * 产品模块 Api 
   */
  //产品列表   &companyTypeId=''&packageState=''&search=''
  productlist = data=>ApiRequest.get(`${urls.PRODUCTLIST}?page=${data.page}&limit=${data.limit}&companyTypeId=${data.companyTypeId}&packageState=${data.packageState}&search=${data.search}`);
  //产品分类列表
  productclassify = data=>ApiRequest.get(`${urls.PRODUCTCLASSIFY}?page=1&limit=100`);
  //产品分类列表删除
  deleteproductlist = data=> ApiRequest.put(`${urls.DELETEPRODUCTLIST}`,data);


  
}

export default new Apis();
