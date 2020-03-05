import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom';
import OpenBill from "./OpenBill"

const { Option } = Select;
const { RangePicker } = DatePicker

class BillDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            routerList: [
                {
                    name: "首页",
                    url: "/"
                },
                {
                    name: "申请列表",
                    url: "/order"
                },
                {
                    name: "申请详情",
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

    showModal = () => {
        this.setState({
          visible: true,
        });
      };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };



    render() {
        let { routerList } = this.state
        return (
            <div>
                <BreadeHeader routerList={routerList}></BreadeHeader>
                <div className="one-content">
                    {/* name-title */}
                    <div className="name-content">
                        <div className="title">
                            <span>南京严氏文化传媒的发票申请
                                <div className="billState">
                                    <div>
                                        <span>开票金额</span>
                                        <span style={{ color: "#D43030", fontSize: "28px" }}>￥5000000</span>
                                    </div>
                                    <div>
                                        <span>开票状态</span>
                                        <span>审核中</span>
                                    </div>
                                </div>
                            </span>
                            <span className="divButton">
                                {/* 通过不通过按钮组 */}
                                <span className="btn-diy">
                                    <Button onClick={this.showModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>查看发票</Button>
                                </span>
                                
                                <span className="btn-diy">
                                    <Button onClick={this.showModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>开票</Button>
                                    {/* <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>通过</Button> */}
                                </span>
                                <Button onClick={this.showDeleteConfirm} type="danger" style={{ backgroundColor: "#FF4D4F", color: "#FFF", marginRight: "10px" }}>驳回</Button>
                                
                            </span>
                        </div>
                        {/* <div className="title-detail">
                            <div>
                                <span>申请人 : 18861851261</span>
                                <span>申请时间 : 2020-02-30 18:48:00</span>
                            </div>
                            <div>
                                <span>审核人 : 徐梦绮</span>
                                <span>审核时间 : 2020-02-30 18:48:00</span>
                            </div>
                        </div> */}


                        <div className="pro-con bill-con" style={{ padding: "20px 0 " }}>
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
                                    <span>开票中</span><br />
                                    <span>经办人 : 徐善培</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>已开票</span><br />
                                    <span>经办人 : 徐善培</span>
                                    <span></span>
                                </div>
                            </div>
                            <p style={{ width: "58%" }} className="progress-line"></p>
                        </div>
                        {/* 状态 */}
                        <div></div>
                    </div>
                    {/* 设立流程 */}
                    {/* <div className="process">
                        <p>设立流程</p>
                        <div className="pro-con">
                            <div className="progress">
                                <div>
                                    <span>申请</span><br />
                                    <span>申请人 : 18861851261</span><br />
                                    <span>2020-02-16  15:26:26</span>
                                </div>
                                <div>
                                    <span>付款</span><br />
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
                            <p style={{ width: "58%" }} className="progress-line"></p>
                        </div>
                    </div> */}
                    {/* 基本信息 */}
                    <div className="process base" style={{ minHeight: "100px" }}>
                        <p>基本信息   <span className="updateData"></span> </p>
                        <div className="base-content base-contents">
                            <div>
                                <span>申请公司 : 南京严氏文化传媒公司</span>
                                <span>开票金额 : ￥ 5000000</span>
                            </div>
                            <div>
                                <span>纳税人类型 : 一般纳税人</span>
                                <span>公司类型 : 个人独资</span>
                            </div>
                            <div>
                                <span>发票类型 : 普通增值税发票</span>
                                <span> </span>
                            </div>
                        </div>
                    </div>
                    {/* 对接人信息 */}
                    <div className="process base person">
                        <p>客户开票信息   <span className="updateData">保存开票信息</span> </p>
                        <div className="base-content person-content">
                            <div>
                                <span>开票客户名称：舜贝佳信息科技有限公司</span>
                                <span>开户账号：6222 6662 1000 3188 326</span>
                                <span>发票邮寄地址：南京市北京西路330号</span>
                            </div>
                            <div>
                                <span>纳税人识别号：911545465mr46546</span>
                                <span>客户地址：南京市雨花台区世茂52</span>
                                <span> &nbsp; </span>
                            </div>
                            <div>
                                <span>开户银行：南京银行玄武支行</span>
                                <span>单位电话：025-86226667</span>
                                <span> &nbsp;</span>
                            </div>
                        </div>
                    </div>
                    {/* 合同信息 */}
                    <div className="process base person persons" >
                        <p>合同信息   <span className="updateData"></span> </p>
                        <div className="base-content person-content">
                            <div>
                                <span>合同名称：广告合作推广的合同</span>
                                <span>商品名称：推广</span>
                                <span>合同附件</span>
                            </div>
                            <div>
                                <span>合同状态：执行中</span>
                                <span>合同金额：￥500,00.00 （可开票额度￥500,00.00 ）</span>
                                <span> &nbsp; </span>
                            </div>
                            <div>
                                <span>合同类型：服务类型</span>
                                <span>合同签订日期：2020-01-15</span>
                                <span> &nbsp;</span>
                            </div>
                        </div>
                        {/* 合同附件 */}
                        <div className="billPic">
                            <div>
                                <img src={require("../../assets/image/sfz.png")} alt="" /><br />
                                <span>合同附件X</span>
                            </div>
                            <div>
                                <img src={require("../../assets/image/sfz.png")} alt="" /><br />
                                <span>合同附件X</span>
                            </div>
                            <div>
                                <img src={require("../../assets/image/sfz.png")} alt="" /><br />
                                <span>合同附件X</span>
                            </div>
                            <div>
                                <img src={require("../../assets/image/sfz.png")} alt="" /><br />
                                <span>合同附件X</span>
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

                <OpenBill
                    title="提交开票信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                </OpenBill>

            </div>
        );
    }
}

export default BillDetail;
