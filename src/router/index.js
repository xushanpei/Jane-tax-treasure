import React from "react";
import loadable from "@loadable/component";
import RouterView from "../components/layout/RouterView";
import NoFound from "../pages/NoFound";
import NoPermission from "../pages/NoPermission";
import Loading from "../components/layout/Loading";
// const Index = loadable(() => import("../pages/Index"), { fallback: <Loading /> });
//仪表盘
const Dashboard = loadable(() => import("../pages/dashboard/Dashboard"), { fallback: <Loading /> });
// 产品列表
const Product = loadable(()=> import("../pages/product/Product"),{fallback : <Loading/>});
//产品分类
const ProductClassify = loadable(()=> import("../pages/product/ProductClassify"), { fallback: <Loading/> });
//订单管理
const Order = loadable(()=> import("../pages/order/Order"), { fallback :<Loading/> });
//订单详情
const OrderDetail = loadable(()=> import("../pages/order/OrderDetail"), { fallback: <Loading/> });
//公司列表
const CompanyList = loadable(()=> import("../pages/company/CompanyList"), {fallback : <Loading/>});
//公司操作审核中 
const CompanyListOne = loadable(()=> import ("../pages/company/CompanyListOne"), {fallback: <Loading/>});
//公司操作设立中
const CompanyListTwo = loadable(()=> import ("../pages/company/CompanyListTwo"), {fallback: <Loading/>});
//公司操作已设立
const CompanyListThree = loadable(()=> import ("../pages/company/CompanyListThree"), {fallback: <Loading/>});

// 注意区分前端路由和前端菜单是两个不同的东西
// 注：菜单和路由都是基于该路由数据生成
// 菜单可以不全部展示在页面上(隐藏)，但路由必须全部要定义
// 后期可以加入权限控制
const routes = [
  {
    key: "1",
    name: "仪表盘",
    path: "/",
    exact: true,
    component: Dashboard
  },
  {
    key: "2",
    name: "产品",
    path: "/product",
    exact: true,
    component: Product
  },
  {
    key:"3",
    name:"产品分类",
    path:"/productClassify",
    exact:true,
    component:ProductClassify
  },
  {
    key:"3",
    name:"订单管理",
    path:"/order",
    exact:true,
    component:Order
  },
  {
    key:"4",
    name:"订单详情",
    path:"/orderDetail/:id",
    exact:true,
    component:OrderDetail
  },
  {
    key:"5",
    name:"公司列表",
    path:"/companyList",
    exact:true,
    component:CompanyList
  },{
    key:"6",
    name:"公司操作审核中",
    path:"/companyListOne",
    exact:true,
    component:CompanyListOne
  },
  {
    key:"6",
    name:"公司操作设立中",
    path:"/companyListTwo",
    exact:true,
    component:CompanyListTwo
  },
  {
    key:"6",
    name:"公司操作已设立",
    path:"/companyListThree",
    exact:true,
    component:CompanyListThree
  }
];

export default routes;
