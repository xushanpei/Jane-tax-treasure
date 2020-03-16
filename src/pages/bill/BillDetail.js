import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom';
import OpenBill from "./OpenBill";
import Pass from "./Pass"
import { connect } from "react-redux";
import billAction from "../../redux/actions/billAction";


const { Option } = Select;
const { RangePicker } = DatePicker


@connect(
    ({ billReducer, productReducer }) => ({ billReducer, productReducer }),
    {
        //详情
        billinfo: billAction.billinfo,
        //审核通过
        auditpass: billAction.auditpass
    }
)
class BillDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            passVisible:false,
            billId: "",
            billinfo: "",
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
                    dataIndex: 'time',
                    key: 'time',
                    // render: text => text,
                },
                {
                    title: '操作记录',
                    dataIndex: 'content',
                    key: 'content',
                },
                {
                    title: '操作人',
                    dataIndex: 'name',
                    key: 'name',
                }
            ],
            data: [

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


    showPassModal = () => {
        this.setState({
            passVisible: true,
        });
    }
    passHandleOk = e => {
        console.log("通过+++",e);
    //    触发通过接口
     this.props.auditpass(
         Object.assign(e,{billId:this.props.match.params.id})
     )
     //重新获取状态
       setTimeout(()=>{
        this.props.billinfo({
            billId: this.state.billId
        })
       },300)



        this.setState({
            passVisible: false,
        });
    };

    passHandleCancel = e => {
        console.log(e);
        this.setState({
            passVisible: false,
        });
    };


    componentWillMount() {
        console.log(this.props.match.params.id)
        this.setState({
            billId: this.props.match.params.id
        }, () => {
            // 获取详情数据
            this.props.billinfo({
                billId: this.state.billId
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.billReducer.getIn(["billinfo"])) {
            console.log("详情列表", nextProps.billReducer.getIn(["billinfo", "data"]))
            this.setState({
                billinfo: nextProps.billReducer.getIn(["billinfo", "data"])
            })
        }
    }


    render() {
        let { routerList } = this.state
        let { baseInfo, contractInfo, operateList, processList, customerInfo } = this.state.billinfo;
        // console.log("123",baseInfo.submitTime)
        //contractInfo 合同信息
        //customerInfo 客户开票信息
        //operateList 操作记录

        return (
            <div>
                <BreadeHeader routerList={routerList}></BreadeHeader>
                <div className="one-content">
                    {/* name-title */}
                    <div className="name-content">
                        <div className="title">
                            <span>{baseInfo ? baseInfo.companyName : ""}
                                <div className="billState">
                                    <div>
                                        <span>开票金额</span>
                                        <span style={{ color: "#D43030", fontSize: "28px" }}>￥{baseInfo ? baseInfo.invoiceMoney : ""}</span>
                                    </div>
                                    <div>
                                        <span>开票状态</span>

                                        {
                                            baseInfo && baseInfo.billStatus == 1 ? <span>审核中</span> : ""
                                        }
                                        {
                                            baseInfo && baseInfo.billStatus == 2 ? <span>开票中</span> : ""
                                        }
                                        {
                                            baseInfo && baseInfo.billStatus == 3 ? <span>已开票</span> : ""
                                        }
                                        {
                                            baseInfo && baseInfo.billStatus == 4 ? <span>已驳回</span> : ""
                                        }
                                        {
                                            baseInfo && baseInfo.billStatus == 5 ? <span>已邮寄</span> : ""
                                        }
                                    </div>
                                </div>
                            </span>
                            <span className="divButton">
                                {/* 通过不通过按钮组 */}
                               {
                                   baseInfo && baseInfo.billStatus == 3 ? <span className="btn-diy">
                                   <Button onClick={this.showModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>查看发票</Button>
                               </span> : ""
                               }
                               {
                                    baseInfo && baseInfo.billStatus == 2 ? <span className="btn-diy">
                                    <Button onClick={this.showModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>开票</Button>
                                    {/* <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>通过</Button> */}
                                </span> :""
                               }
                               {
                                    baseInfo && baseInfo.billStatus == 1 ? <span className="btn-diy">
                                    <Button onClick={this.showPassModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>通过</Button>
                                    {/* <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>通过</Button> */}
                                </span> :""
                               }
                

                               {
                                   baseInfo && baseInfo.billStatus == 1 ?  <Button onClick={this.showDeleteConfirm} type="danger" style={{ backgroundColor: "#FF4D4F", color: "#FFF", marginRight: "10px" }}>驳回</Button> :""
                               }

                                
                               

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
                            {
                                baseInfo && baseInfo.billStatus == 1 ?  <p style={{ width: "30%" }} className="progress-line"></p> : ""
                            }
                            {
                                baseInfo && baseInfo.billStatus == 2 ?  <p style={{ width: "58%" }} className="progress-line"></p> : ""
                            }
                            {
                                baseInfo && baseInfo.billStatus == 3 ?  <p style={{ width: "100%" }} className="progress-line"></p> : ""
                            }
                            {
                                baseInfo && baseInfo.billStatus == 4 ?  <p style={{ width: "100%" }} className="progress-line"></p> : ""
                            }
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
                    <div className="process base" id="myProgress">
                        <p>基本信息   <span className="updateData"></span> </p>
                        <div className="base-content base-contents">
                            <div>
                                <span>申请公司 : {baseInfo ? baseInfo.companyName : ""}</span>
                                <span>开票金额 : ￥ {baseInfo ? baseInfo.invoiceMoney : ""}</span>
                            </div>
                            <div>
                                <span>纳税人类型 : {baseInfo ? baseInfo.taxpayerTypeName : ""}</span>
                                <span>公司类型 : {baseInfo ? baseInfo.companyTypeName : ""}</span>
                            </div>
                            <div>
                                <span>发票类型 : {baseInfo ? baseInfo.invoiceTypeName : ""}</span>
                                <span> </span>
                            </div>
                        </div>
                    </div>
                    {/* 对接人信息 */}
                    <div className="process base person">
                        <p>客户开票信息   <span className="updateData">保存开票信息</span> </p>
                        <div className="base-content person-content">
                            <div>
                                <span>开票客户名称：{customerInfo ? customerInfo.customerName : ""}</span>
                                <span>开户账号：{customerInfo ? customerInfo.bankAccount : ""}</span>
                                <span>发票邮寄地址：{customerInfo ? customerInfo.address : ""}</span>
                            </div>
                            <div>
                                <span>纳税人识别号：{customerInfo ? customerInfo.txpayerNumber : ""}</span>
                                <span>客户地址：{customerInfo ? customerInfo.unitAddress : ""}</span>
                                <span> &nbsp; </span>
                            </div>
                            <div>
                                <span>开户银行：{customerInfo ? customerInfo.openingBank : ""}</span>
                                <span>单位电话：{customerInfo ? customerInfo.officeTel : ""}</span>
                                <span> &nbsp;</span>
                            </div>
                        </div>
                    </div>
                    {/* 合同信息 */}
                    <div className="process base person persons" id="htInfomatio">
                        <p>合同信息   <span className="updateData"></span> </p>
                        <div className="base-content person-content">
                            <div>
                                <span>合同名称：{contractInfo ? contractInfo.contractName : ""}</span>
                                {/* <span>商品名称：{contractInfo ? contractInfo.commodityName :"" }</span> */}
                                {/* <span>合同附件</span> */}
                                <span> </span>
                            </div>
                            <div>
                                {/* <span>合同状态：{contractInfo ? contractInfo.contractStatusName :"" }</span>
                                <span>合同金额：￥{contractInfo ? contractInfo.contractAmount :"" } （可开票额度￥ {contractInfo ? contractInfo.totalSurplus :"" }）</span>
                                <span> &nbsp; </span> */}
                            </div>
                            <div>
                                {/* <span>合同类型：{contractInfo ? contractInfo.contractTypeName :"" }</span>
                                <span>合同签订日期：{contractInfo ? contractInfo.contractDate :"" }</span>
                                <span> &nbsp;</span> */}
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
                            <Table size="small" pagination={false} bordered columns={this.state.columns} dataSource={operateList ? operateList : []} />
                        </div>
                    </div>

                </div>

                <OpenBill
                    title="提交开票信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    data={this.state.customerInfo}
                >
                </OpenBill>

                <Pass
                    title="审核通过"
                    visible={this.state.passVisible}
                    onOk={this.passHandleOk}
                    onCancel={this.passHandleCancel}
                    // data={this.state.customerInfo}
                >
                </Pass>

            </div>
        );
    }
}

export default BillDetail;
