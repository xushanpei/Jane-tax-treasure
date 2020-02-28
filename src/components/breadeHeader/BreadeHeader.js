import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb } from "antd";
import "./index.scss";

class BreadeHeader extends Component {
  render() {
    let { routerList } = this.props;

    return (
      <div className="breadeHeader-container">
        {/* 面包屑头部 */}
        <Breadcrumb>
          {/* routerList */}
          {
              routerList ? routerList.map((item,key)=>{
                 return (
                 <Breadcrumb.Item key = {key}>{item.name}</Breadcrumb.Item>
                 )
              }) :""
          }
        </Breadcrumb>
        <p>
            {
                routerList ? routerList[routerList.length-1].name : ""
            }
        </p>
      </div>
    );
  }
}

export default BreadeHeader;
