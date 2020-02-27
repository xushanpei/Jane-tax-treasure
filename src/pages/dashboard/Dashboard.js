import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag } from "antd";
import "./dashboard.scss";
import DayCard from "../../components/card/DayCard";
import MonthCard from "../../components/card/MonthCard";
import WeekCard from "../../components/card/WeekCard"

class Dashboard extends Component {
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
            </div>
        );
    }
}

export default Dashboard;
