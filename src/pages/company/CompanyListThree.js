import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom'

const { Option } = Select;
const { RangePicker } = DatePicker

class CompanyListThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //基本信息/对接人信息
            baseInfo: "",
            //头部信息
            headerData: "",


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
                    dataIndex: 'time',
                    key: 'time',
                    // render: text => text,
                },
                {
                    title: '操作记录',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '操作人',
                    dataIndex: 'content',
                    key: 'content',
                }
            ],
            data: [

            ],

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.baseInfo) {
            this.setState({
                baseInfo: nextProps.baseInfo
            }, () => {
                console.log("接受到的基本信息对接人信息", nextProps.baseInfo);
            })
        }

        if (nextProps.getcompanyoperaterecord) {
            console.log("接收到的操作记录", nextProps.getcompanyoperaterecord)
            let data = nextProps.getcompanyoperaterecord;
            for (let i = 0; i < data.length; i++) {
                data[i].key = i + 1;
            }
            this.setState({
                data
            })
        }

        if (nextProps.headerData) {
            console.log("接收到的头部操作信息", nextProps.headerData)
            this.setState({
                headerData: nextProps.headerData
            })

        }




    }


    render() {
        let { routerList, baseInfo, headerData } = this.state
        return (
            <div>
                <BreadeHeader routerList={routerList}></BreadeHeader>
                <div className="one-content">
                    {/* name-title */}
                    <div className="name-content">
                        <div className="title">
                            <span>{headerData.companyName}</span>
                            <span>
                                {/* 通过不通过按钮组 */}
                                <Button onClick={this.showDeleteConfirm} type="danger" style={{ backgroundColor: "#FF4D4F", color: "#FFF", marginRight: "10px" }}>锁定</Button>
                                <span className="btn-diy">
                                    <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>发消息给客户</Button>
                                </span>
                            </span>
                        </div>
                        <div className="title-detail">
                            <div>
                                <span>申请人 : {headerData.applyName}</span>
                                <span>申请时间 : {headerData.applyTime}</span>
                            </div>
                            <div>
                                <span>审核人 : {headerData.auditorName}</span>
                                <span>审核时间 : {headerData.auditorTime}</span>
                            </div>
                            <div>
                                <span>经办人 : {headerData.handleName}</span>
                                <span>经办时间 : {headerData.handleTime}</span>
                            </div>
                        </div>
                        {/* 状态 */}
                        <div className="state">
                            <p>状态</p>
                            <p>{headerData.companyStatus}</p>
                        </div>
                    </div>
                    {/* 设立流程 */}
                    <div className="process">
                        <p>设立流程</p>
                        <div className="pro-con">
                            <div className="progress">
                                <div>
                                    <span>申请</span><br />
                                    <span>申请人 : {headerData.applyName}</span><br />
                                    <span>2020-02-16  15:26:26</span>
                                </div>
                                <div>
                                    <span>审核</span><br />
                                    <span>审核人 : {headerData.auditorName}</span> <br />
                                    <span>{headerData.auditorTime}</span>
                                </div>
                                <div>
                                    <span>复审核</span><br />
                                    <span>审核人 : {headerData.auditorName}</span> <br />
                                    <span>{headerData.reviewTime}</span>
                                </div>
                                <div>
                                    <span>设立</span><br />
                                    <span>经办人 : {headerData.handleName}</span><br />
                                    <span>{headerData.handleTime}</span><br />
                                    <a href="#">经办资料下载</a>
                                </div>
                                <div>
                                    <span>已设立</span><br />
                                    <span>经办人 : {headerData.handleName}</span><br />
                                    <span>{headerData.handleTime}</span><br />
                                </div>
                            </div>
                            <p style={{ width: "100%" }} className="progress-line"></p>
                        </div>
                    </div>
                    {/* 票税数据 */}
                    <div className="comBlock">
                        <div>
                            <span>年开票额度</span>
                            <span>450000000</span>
                        </div>
                        <div>
                            <span>剩余额度</span>
                            <span>450000000</span>
                        </div>
                        <div>
                            <span>本月额度</span>
                            <span>450000000</span>
                        </div>
                        <div>
                            <span>本月剩余额度</span>
                            <span>450000000</span>
                        </div>
                    </div>
                    <div className="comBlock">
                        <div>
                            <span>税金预缴率</span>
                            <span>450000000</span>
                        </div>
                        <div>
                            <span>总开票</span>
                            <span>450000000</span>
                        </div>
                        <div>
                            <span>本月已开票</span>
                            <span>450000000</span>
                        </div>
                        <div>
                            <span>申请中</span>
                            <span>450000000</span>
                        </div>
                    </div>

                    {/* 工商信息 */}

                    <div className="process base">
                        <p>工商信息   <span className="updateData"></span> </p>
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
                            <div className="zh">
                                {/* <span>申请人 : 18861851261</span>
                                <span>公司名称 : 南京严氏文化传媒公司 (随机名称)</span>
                                <span>纳税人类型 : 一般纳税人</span>
                                <span>简税宝服务期限 : 2022-02-10</span>
                                <span>公司地区 : 江苏省 南京市 江宁区</span>
                                <span>公司法人 : 徐善培</span>
                                <span>法人证件 : 已提交</span> */}
                                <img src={require("../../assets/image/sfz.png")} alt="" /> <br />
                                <span className="btn-diy" style={{ display: "block", marginLeft: "85px" }}>
                                    <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>点击上传营业执照</Button>
                                </span>
                            </div>
                        </div>
                    </div>



















                    {/* 基本信息 */}
                    <div className="process base">
                        <p>基本信息   <span className="updateData">修改</span> </p>
                        <div className="base-content">
                            <div>
                                <span>申请人 : {baseInfo.applyPhone}</span>
                                <span>公司名称 : {baseInfo.companyName}</span>
                                <span>纳税人类型 : {baseInfo.taxpayerType == 1 ? "一般纳税人" : "小规模纳税人"}</span>
                                <span>简税宝服务期限 : {baseInfo.serviceEndTime}</span>
                                <span>公司地区 : {baseInfo.companyRegion}</span>
                                <span>公司法人 : {baseInfo.companyLegalName}</span>
                                <span>法人证件 : {baseInfo.submitFlag == 1 ? "已提交" : "未提交"}</span>
                            </div>
                            <div>
                                <span>申请时间 : {baseInfo.applyTime}</span>
                                <span>公司类型 : {baseInfo.companyType}</span>
                                <span>增值税返还 : {baseInfo.vatReturn}</span>
                                <span>赠送时间 : {baseInfo.giveMonth}</span>
                                <span>公司行业 : {baseInfo.industryName}</span>
                                <span>法人手机 : {baseInfo.companyLegalPhone}</span>
                                <span>人脸验证 : {baseInfo.faceFlag == 1 ? "正确" : "失误"}</span>
                            </div>
                            <div>
                                {/* <span>审核状态 : </span> */}
                                {
                                    baseInfo.companyStatus == 1 ? <span>审核状态 : 待设立</span> : ""
                                }
                                {
                                    baseInfo.companyStatus == 2 ? <span>审核状态 : 审核中</span> : ""
                                }
                                {
                                    baseInfo.companyStatus == "2-1" ? <span>审核状态 : 复审中</span> : ""
                                }
                                {
                                    baseInfo.companyStatus == 3 ? <span>审核状态 : 设立中</span> : ""
                                }
                                {
                                    baseInfo.companyStatus == 4 ? <span>审核状态 : 已设立</span> : ""
                                }
                                <span>开票额度 : {baseInfo.quota}</span>
                                <span>注册资本 : {baseInfo.registeredCapital}</span>
                                <span>法人邮箱 : {baseInfo.companyLegalEmail}</span>
                                <span>  </span>
                                <span> </span>
                                <span> </span>
                            </div>
                        </div>
                    </div>
                    {/* 对接人信息 */}
                    <div className="process base person">
                        <p>对接人信息   <span className="updateData">修改</span> </p>
                        <div className="base-content person-content">
                            <div>
                                <span>对接人姓名 : {baseInfo.dockName}</span>
                                <span>对接人邮箱 : {baseInfo.dockEmail}</span>
                            </div>
                            <div>
                                <span>对接人身份证号 : {baseInfo.dockNum}</span>
                                <span>邮寄地址 : {baseInfo.address}</span>
                            </div>
                            <div>
                                <span>对接人手机 : {baseInfo.dockPhone}</span>
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

export default CompanyListThree;
