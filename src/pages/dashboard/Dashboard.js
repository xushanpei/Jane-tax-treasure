import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Tabs, DatePicker, Progress, Icon } from "antd";
import "./dashboard.scss";
import DayCard from "../../components/card/DayCard";
import MonthCard from "../../components/card/MonthCard";
import WeekCard from "../../components/card/WeekCard";
import echarts from "echarts";
import OrderLineCharts from "./OrderLineCharts";

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

class Dashboard extends Component {
  //  select
  select = key => {
    console.log(key);
  };

  render() {
    return (
      <div className="dashboard-container">
        {/* 卡片 */}

        <div className="cards1">
          <DayCard />
          <MonthCard />
          <WeekCard id="1" />
          <WeekCard id="2" />
        </div>
        <div className="cards2">
          <WeekCard id="3" />
          <WeekCard id="4" />
          <WeekCard id="5" />
          <WeekCard id="6" />
        </div>
        {/* 卡片导航模块 */}
        <div className="modal">
          <div>
            <span>用户</span>
          </div>
          <div>
            <span>产品</span>
          </div>
          <div>
            <span>订单</span>
          </div>
          <div>
            <span>公司</span>
          </div>
          <div>
            <span>发票</span>
          </div>
          <div>
            <span>数据</span>
          </div>
          <div>
            <span>设置</span>
          </div>
        </div>
        {/*         订单        */}
        <div className="order-container">
          <div className="order-content">
            {/* 头部 */}
            <div className="order-header">
              <div>订单</div>
              <div>
                <Tabs onChange={this.select}>
                  <TabPane tab="今年" key="1" />
                  <TabPane tab="本月" key="2" />
                  <TabPane tab="全年" key="3" />
                </Tabs>
                <RangePicker
                  size="small"
                  style={{ width: "229px", marginTop: "10px" }}
                />
              </div>
            </div>
            {/* ehcarts */}
            <div className="charts-content">
              <OrderLineCharts />
              <div className="charts-right" >
                  {/* 订单额 */}
                  <div className="line-number">
                      <p>3006.1</p>
                      <span>上个30天销售额</span>
                  </div>

                  <div className="line-number">
                      <p>1010.68</p>
                      <span>最近30天销售额</span>
                      <a>100% <Icon type="caret-up" /></a>
                  </div>
                  <Progress  status="active" size="small"  percent={100} showInfo={false}/>
                  <div className="line-number">
                      <p>450</p>
                      <span>上个30天订单总数</span>
                  </div>

                  <div className="line-number">
                      <p>206</p>
                      <span>最近30天订单总数</span>
                      <a>50% <Icon type="caret-up" /></a>
                  </div>

                  <Progress  status="active" size="small"  percent={50} showInfo={false}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
