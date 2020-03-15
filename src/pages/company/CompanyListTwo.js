import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon, Checkbox, Form, message } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import companyAction from "../../redux/actions/companyAction";
import Bohui from "./Bohui"
import SendMsg from "./SendMsg"

const { Option } = Select;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

// //设立
// COMPANYOPERATEESTABLISH:"COMPANYOPERATEESTABLISH",
// COMPANYOPERATEESTABLISH_SUCCESS:"COMPANYOPERATEESTABLISH_SUCCESS",
// //驳回
// COMPANYOPERATEREJECT:"COMPANYOPERATEREJECT",
// COMPANYOPERATEREJECT_SUCCESS:"COMPANYOPERATEREJECT_SUCCESS",
// //锁定
// COMPANYOPERATEBILLLOCK:"COMPANYOPERATEBILLLOCK",
// COMPANYOPERATEBILLLOCK_SUCCESS:"COMPANYOPERATEBILLLOCK_SUCCESS"
@connect(
    ({ companyReducer, productReducer }) => ({ companyReducer, productReducer }),
    {
        //设立通过-----
        companyoperateestablish: companyAction.companyoperateestablish,
        //驳回
        companyoperatereject: companyAction.companyoperatereject,
        //
        sendnotice:companyAction.sendnotice
    }
)
class CompanyListTwos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //基本信息/对接人信息
            baseInfo: "",
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
            plainOptions: [
                // "1、名称审核完成",
                // "2、工商阶段完成",
                // "3、银行开户完成"
                // 4. 税务认证
                {
                    label: '名称审核完成',
                    value: 0
                },
                {
                    label: '工商阶段完成',
                    value: 1
                },
                {
                    label: '银行开户完成',
                    value: 2
                },
                {
                    label: '税务认证',
                    value: 3
                },
            ],
            checkedList: [],
            piclistOptions: [
                {
                    label: '法人身份证',
                    value: 0
                },
                {
                    label: '法人一寸白底照',
                    value: 1
                },
            ],
            piclist: [],
            visible: false,
            bohuiVisible: false
        }
    }


    onChange = checkedList => {
        this.setState({
            checkedList,
        });
    };
    onChangepiclist = piclist => {
        this.setState({
            piclist
        })
    }

    //增加上传设立资料
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.props.form.validateFields((err, values) => {
            if (err) return;//检查Form表单填写的数据是否满足rules的要求
            console.log(values)
            let data = this.state.piclistOptions;
            data.push(values);
            this.setState({
                visible: false,
                piclistOptions: data
            }, () => {
                this.props.form.resetFields()
            });
        })
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    // 下面是驳回的弹框方法
    bohuiHandleOk = e => {
        // this.props.form.validateFields((err, values) => {
        //     if (err) return;//检查Form表单填写的数据是否满足rules的要求
            // console.log(values)
            this.setState({
                bohuiVisible: false
            }, () => {
                //触发驳回的方法
                this.props.companyoperatereject(
                    Object.assign({ companyId: this.state.baseInfo.companyId }, e)
                )
            })
        // })
    };

    bohuiHandleCancel = e => {
        console.log(e);
        this.setState({
            bohuiVisible: false
        });
    };



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

        //通过
        if (nextProps.companyReducer.getIn(["companyoperateestablish"])) {
            console.log(nextProps.companyReducer.getIn(["companyoperateestablish"]))
            let data = nextProps.companyReducer.getIn(["companyoperateestablish"]);
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", data.status)
            if (data.status !== 200) {
                message.warning(data.message)
            } else {
                message.success(data.message)
                this.props.changeState(4)
            }
        }
    }
    // 通过
    pass = () => {
        this.props.companyoperateestablish({
            companyId: this.state.baseInfo.companyId
        })
    }
    // 驳回 -- 接口需要修改
    nopass = () => {
        this.setState({
            bohuiVisible: true
        })
    }

     // 发消息给客户 sendnotice
     sendnotice = ()=>{
        this.setState({
            sendMsgVisible : true
        })
    }

    sendMsgHandleOk = e => {
        // this.props.form.validateFields((err, values) => {
        //     if (err) return;//检查Form表单填写的数据是否满足rules的要求
        //     console.log(values)
            this.setState({
                sendMsgVisible: false
            }, () => {
                //触发驳回的方法
                this.props.sendnotice(
                    Object.assign({ companyId: this.state.baseInfo.companyId }, e)
                )
            })
        // })
    };

    sendMsgHandleCancel = e => {
        console.log(e);
        this.setState({
            sendMsgVisible: false
        });
    };


    render() {
        let { routerList, baseInfo, headerData } = this.state
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
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
                                <span className="btn-diy">
                                    {/* <Link to="/companyListThree"> */}
                                    <Button onClick={this.pass} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>通过</Button>
                                    {/* </Link> */}
                                </span>
                                <Button onClick={this.nopass} type="danger" style={{ backgroundColor: "#FF4D4F", color: "#FFF", marginRight: "10px" }}>驳回</Button>
                                <span className="btn-diy">
                                    <Button onClick={this.sendnotice} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>发消息给客户</Button>
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
                                </div>
                                <div>
                                    <span>已设立</span><br />
                                    <span>经办人 : {headerData.handleName}</span><br />
                                    <span>{headerData.handleTime}</span><br />
                                </div>
                            </div>
                            <p style={{ width: "78%" }} className="progress-line"></p>
                        </div>
                    </div>
                    {/* 设立流程 ++  */}
                    {/* 设立流程 */}
                    <div className="process">
                        <p>设立流程 <span className="updateData">一键下载设立资料</span></p>
                        {/* 设立中新增设立流程 */}
                        <div className="addProgress">
                            <CheckboxGroup
                                options={this.state.plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                            />
                            <p className="borderp"></p>
                            <p style={{ marginTop: "15px" }}>请选择需要用户上传的设立资料</p>

                            <CheckboxGroup style={{ marginTop: "15px" }}
                                options={this.state.piclistOptions}
                                value={this.state.piclist}
                                onChange={this.onChangepiclist}
                            /> &nbsp;&nbsp;
                            <span onClick={this.showModal} className="add"><Icon type="plus-circle" /> 增加上传项</span>
                            {/* 添加一键通知按钮 */}
                            <Button className="tipButton" style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>一键通知用户</Button>
                            {/* 查看上传资料 */}
                            <div className="lookList">
                                <p>查看上传资料</p>
                                <div className="lookList-content">
                                    <div>
                                        <img src={require("../../assets/image/sfz.png")} alt="" />
                                        <p>资料名称</p>
                                    </div>
                                    <div>
                                        <img src={require("../../assets/image/sfz.png")} alt="" />
                                        <p>资料名称</p>
                                    </div>
                                    <div>
                                        <img src={require("../../assets/image/sfz.png")} alt="" />
                                        <p>资料名称</p>
                                    </div>
                                    <div>
                                        <img src={require("../../assets/image/sfz.png")} alt="" />
                                        <p>资料名称</p>
                                    </div>
                                </div>
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
                        {/* 身份证正反面 */}
                        <div className="base-pic">
                            <div className="zpic">
                                <img src={baseInfo.cardZ ? baseInfo.cardZ : require("../../assets/image/sfz.png")} alt="" />
                                <p>身份证正面</p>
                            </div>
                            <div className="fpic">
                                <img src={baseInfo.cardF ? baseInfo.cardF : require("../../assets/image/sfz.png")} alt="" />
                                <p>身份证反面</p>
                            </div>
                        </div>
                    </div>
                    {/* 对接人信息 */}
                    <div className="process base person">
                        <p>对接人信息   <span className="updateData" onClick={this.props.updatedock}>修改</span> </p>
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

                    {/* 通知记录 */}
                    <div className="process">
                        <p>通知记录</p>
                        <div className="todo_table">
                            <Table size="small" bordered columns={this.state.columns} dataSource={this.state.data} />
                        </div>
                    </div>

                </div>

                {/* 增加用户上传资料modal */}
                <Modal
                    title="增加上传项"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form {...formItemLayout}>
                        <FormItem label="上传名称">
                            {getFieldDecorator('label', {
                                rules: [{ required: true, message: '请输入上传名称' }],
                            })(
                                <Input placeholder="请输入上传名称" />
                            )}
                        </FormItem>
                        <FormItem label="上传分类">
                            {getFieldDecorator('value', {
                                rules: [{ required: true, message: '请选择上传分类' }],
                            })(
                                <Select placeholder="请选择上传分类" style={{ width: "160px" }}>
                                    <Option value="1">图片</Option>
                                    <Option value="2">视频</Option>
                                    <Option value="3">文件</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
                <Bohui
                    title="驳回理由"
                    visible={this.state.bohuiVisible}
                    onOk={this.bohuiHandleOk}
                    onCancel={this.bohuiHandleCancel}

                >
                </Bohui>
                <SendMsg
                    title="发送消息"
                    visible={this.state.sendMsgVisible}
                    onOk={this.sendMsgHandleOk}
                    onCancel={this.sendMsgHandleCancel}
                >
                </SendMsg>
            </div>
        );
    }
}
const CompanyListTwo = Form.create()(CompanyListTwos);

export default CompanyListTwo;
