import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Tabs, DatePicker } from "antd";
import "./dashboard.scss";
import DayCard from "../../components/card/DayCard";
import MonthCard from "../../components/card/MonthCard";
import WeekCard from "../../components/card/WeekCard";
import echarts from "echarts";
import OrderLineCharts from "./OrderLineCharts"

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;


class Dashboard extends Component {

    
//  select
select = (key)=>{
 console.log(key)
}
   

    render() {

        return (
            <div className="dashboard-container">
                {/* 卡片 */}
                <div className="cards1">
                    <DayCard></DayCard>
                    <MonthCard></MonthCard>
                    <WeekCard id="1"></WeekCard>
                    <WeekCard id="2"></WeekCard>
                </div>
                <div className="cards2">
                    <WeekCard id="3"></WeekCard>
                    <WeekCard id="4"></WeekCard>
                    <WeekCard id="5"></WeekCard>
                    <WeekCard id="6"></WeekCard>
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
                            <Tabs  onChange={this.select} >
                                <TabPane tab="今年" key="1">
                                </TabPane>
                                <TabPane tab="本月" key="2">
                                </TabPane>
                                <TabPane tab="全年" key="3">
                                </TabPane>
                            </Tabs>
                            <RangePicker size="small" style={{width:"229px",marginTop:"10px"}}  />
                            </div>
                        </div>
                        {/* ehcarts */}
                        <div className="charts-content">
                        <OrderLineCharts></OrderLineCharts> 
                            <div className="charts-right">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
