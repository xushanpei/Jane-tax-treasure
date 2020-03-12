import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom'

const { Option } = Select;
const { RangePicker } = DatePicker

class CompanyListOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerList: [
                {
                    name: "首页",
                    url: "/"
                },
                {
                    name: "公司操作",
                    url: "/order"
                }
            ],

            columns: [
                {
                    title: '操作时间',
                    dataIndex: 'key',
                    key: 'key',
                    render: text => text,
                },
                {
                    title: '操作记录',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '操作人',
                    dataIndex: 'type',
                    key: 'type',
                }
            ],
            data: [
                {
                    key: '2020-12-20 15:25:00',
                    name: '不通过,原因:XXXX',
                    type: 'xsp',
                },
                {
                    key: '2020-12-20 15:25:01',
                    name: '不通过,原因:XXXX',
                    type: "xushanpei",
                },
                {
                    key: '2020-12-20 15:25:02',
                    name: '不通过,原因:XXXX',
                    type: "XXXXX",
                },
            ],

        }
    }


    render() {
        let { routerList } = this.state
        return (
            <div>
                <BreadeHeader routerList={routerList}></BreadeHeader>
                <div className="one-content">
                    {/* name-title */}
                    <div className="name-content">
                        <div className="title">
                            <span>南京严氏文化传媒 (随机名称)</span>
                            <span>
                                {/* 通过不通过按钮组 */}
                                <span className="btn-diy">
                                    <Link to="/companyListTwo">
                                    <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>通过</Button>
                                    </Link>

                                    {/* <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>通过</Button> */}
                                </span>
                                <Button onClick={this.showDeleteConfirm} type="danger" style={{ backgroundColor: "#FF4D4F", color: "#FFF", marginRight: "10px" }}>不通过</Button>
                            </span>
                        </div>
                        <div className="title-detail">
                            <div>
                                <span>申请人 : 18861851261</span>
                                <span>申请时间 : 2020-02-30 18:48:00</span>
                            </div>
                            <div>
                                <span>审核人 : 徐梦绮</span>
                                <span>审核时间 : 2020-02-30 18:48:00</span>
                            </div>
                        </div>
                        {/* 状态 */}
                        <div className="state">
                            <p>状态</p>
                            <p>待审核</p>
                        </div>
                    </div>
                    {/* 设立流程 */}
                    <div className="process">
                        <p>设立流程</p>
                        <div className="pro-con">
                            <div className="progress">
                                <div>
                                    <span>申请</span><br />
                                    <span>申请人 : 18861851261</span><br />
                                    <span>2020-02-16  15:26:26</span>
                                </div>
                                <div>
                                    <span>审核</span><br />
                                    <span>审核人 : 徐梦绮</span> <br />
                                    <span>已花费 24小时56分钟</span>
                                </div>
                                <div>
                                    <span>复审核</span><br />
                                    <span>审核人 : 徐梦绮</span> <br />
                                    <span>已花费 24小时56分钟</span>
                                </div>
                                <div>
                                    <span>设立</span><br />
                                    <span>经办人 : 徐善培</span>
                                </div>
                                <div>
                                    <span>已设立</span><br />
                                    <span>经办人 : 徐善培</span>
                                </div>
                            </div>
                            <p style={{ width: "32%" }} className="progress-line"></p>
                        </div>
                    </div>
                    {/* 基本信息 */}
                    <div className="process base">
                        <p>基本信息   <span className="updateData">修改</span> </p>
                        <div className="base-content">
                            <div>
                                <span>申请人 : 18861851261</span>
                                <span>公司名称 : 南京严氏文化传媒公司 (随机名称)</span>
                                <span>纳税人类型 : 一般纳税人</span>
                                <span>简税宝服务期限 : 2022-02-10</span>
                                <span>公司地区 : 江苏省 南京市 江宁区</span>
                                <span>公司法人 : 徐善培</span>
                                <span>法人证件 : 已提交</span>
                            </div>
                            <div>
                                <span>申请人 : 18861851261</span>
                                <span>公司名称 : 南京严氏文化传媒公司 (随机名称)</span>
                                <span>纳税人类型 : 一般纳税人</span>
                                <span>简税宝服务期限 : 2022-02-10</span>
                                <span>公司地区 : 江苏省 南京市 江宁区</span>
                                <span>公司法人 : 徐善培</span>
                                <span>法人证件 : 已提交</span>
                            </div>
                            <div>
                                <span>申请人 : 18861851261</span>
                                <span>公司名称 : 南京严氏文化传媒公司 (随机名称)</span>
                                <span>纳税人类型 : 一般纳税人</span>
                                <span>简税宝服务期限 : 2022-02-10</span>
                                <span>公司地区 : 江苏省 南京市 江宁区</span>
                                <span>公司法人 : 徐善培</span>
                                <span>法人证件 : 已提交</span>
                            </div>
                        </div>

                        {/* 身份证正反面 */}
                        <div className="base-pic">
                            <div className="zpic">
                                <img src={require("../../assets/image/sfz.png")} alt="" />
                                <p>身份证正面</p>
                            </div>
                            <div className="fpic">
                                <img src={require("../../assets/image/sfz.png")} alt="" />
                                <p>身份证反面</p>
                            </div>
                        </div>
                    </div>
                    {/* 对接人信息 */}
                    <div className="process base person">
                        <p>对接人信息   <span className="updateData">修改</span> </p>
                        <div className="base-content person-content">
                            <div>
                                <span>对接人姓名 : 徐善培</span>
                                <span>对接人邮箱 : xu_shan_pei@163.com</span>
                            </div>
                            <div>
                                <span>对接人身份证号 : 18861851261</span>
                                <span>邮寄地址 : 南京严氏文化传媒公司 (随机名称)</span>
                            </div>
                            <div>
                                <span>对接人手机 : 18861851261</span>
                            </div>
                        </div>


                    </div>

                    {/* 操作记录 */}
                    <div className="process">
                        <p>操作记录</p>
                        <div className="todo_table">
                            <Table size="small" bordered columns={this.state.columns} dataSource={this.state.data} />
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default CompanyListOne;
