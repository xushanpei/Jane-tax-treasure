import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon, Cascader } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom';


const { Option } = Select;
const { RangePicker } = DatePicker

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 筛选属性
            select: {
                createTime: 0
            },
            searchValue: "",
            routerList: [
                {
                    name: "首页",
                    url: "/"
                },
                {
                    name: "用户管理",
                    url: "/order"
                },
                {
                    name: "用户详情",
                    url: "/order"
                }
            ],
            columns: [
                {
                    title: '订单号',
                    dataIndex: 'key',
                    key: 'key',
                    render: text => text,
                },
                {
                    title: '手机号',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '产品名称',
                    dataIndex: 'type',
                    key: 'type',
                },
                {
                    title: '实际支付',
                    key: 'number',
                    dataIndex: 'number',
                    //   render: tags => (
                    //     <span>
                    //       {tags.map(tag => {
                    //         let color = tag.length > 5 ? 'geekblue' : 'green';
                    //         if (tag === 'loser') {
                    //           color = 'volcano';
                    //         }
                    //         return (
                    //           <Tag color={color} key={tag}>
                    //             {tag.toUpperCase()}
                    //           </Tag>
                    //         );
                    //       })}
                    //     </span>
                    //   ),
                },
                {
                    title: '支付方式',
                    key: 'state',
                    dataIndex: 'state',
                    // render: (text, record) => (
                    //   <span>
                    //     <span>{record.state == 1 ? "上架" : "下架"}</span> &nbsp;
                    //     <Switch  defaultChecked  />
                    //   </span>
                    // ),
                },
                {
                    title: '订单状态',
                    key: 'states',
                    dataIndex: 'states',
                    // render: (text, record) => (
                    //   <span>
                    //     <span>{record.state == 1 ? "上架" : "下架"}</span> &nbsp;
                    //     <Switch  defaultChecked  />
                    //   </span>
                    // ),
                },
                {
                    title: '下单时间',
                    key: 'time',
                    render: (text, record) => (
                        <span>
                            <span>{record.time}</span>
                        </span>
                    ),
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <a>查看详情</a>
                    ),
                },
            ],
            data: [
                {
                    key: '1',
                    name: '套餐一',
                    type: '个人独资',
                    number: 100,
                    state: 1,
                    payType: "支付宝",
                    orderState: "已支付",
                    time: "2019.01.20",
                    action: "操作"
                },
                {
                    key: '2',
                    name: '套餐二',
                    type: "个人独资",
                    number: 100,
                    state: 0,
                    payType: "支付宝",
                    orderState: "已支付",
                    time: "2019.01.20",
                    action: "操作"
                },
                {
                    key: '3',
                    name: '套餐三',
                    type: "个人独资",
                    number: 20,
                    state: 0,
                    payType: "支付宝",
                    orderState: "已支付",
                    time: "2019.01.20",
                    action: "操作"
                },
            ],
            visible: false,
            editVisible: false
        };
    }


    //设立时间
    setCreateTime = (value) => {
        if (value == "") {
            this.setState({
                select: {
                    orderState: this.state.select.orderState,
                    orderType: this.state.select.orderType,
                    payType: this.state.select.payType,
                    createTime: value
                },
                searchValue: value
            })
        }

    }
    onChange = (date, dateString) => {
        console.log(date, dateString)
        this.setState({
            select: {
                orderState: this.state.select.orderState,
                orderType: this.state.select.orderType,
                payType: this.state.select.payType,
                createTime: date
            },
            searchValue: date
        })
    }


    render() {
        let { routerList, searchValue } = this.state;
        let { orderState, orderType, payType, createTime } = this.state.select

        return (
            <div className="product-container">
                {/* 产品列表 */}
                {/* 头部 */}
                <BreadeHeader routerList={routerList} />
                {/* 内容部分 */}
                <div className="userContent">
                    {/* top1 */}
                    <div className="userContent-base">
                        <div>
                            <img src={require("../../assets/image/sfz.png")} alt="" />
                        </div>
                        <div>
                            <p>13288123456</p>
                            <p>注册时间: 2020-02-15  18:26:29
                                <span>最近登录时间: 2020-02-15  18:26:29 </span>
                            </p>
                        </div>
                        <div>
                            <span className="btn-diy">

                                <Button onClick={this.editShowModal} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginRight: "10px" }}>修改</Button>

                            </span>
                            <Button onClick={this.showDeleteConfirm} type="danger" style={{ backgroundColor: "#FF4D4F", color: "#FFF", marginRight: "10px" }}>锁定</Button>
                        </div>
                    </div>
                    {/* 基本信息 */}
                    <div className="userBase">
                        <p>基本信息</p>
                        <div className="userBase-content">
                            {/* 基本信息3列 */}
                            <div>
                                <span>手机号: 18861851261</span><br />
                                <span>微信号: 1129197725</span>
                            </div>
                            <div>
                                <span>姓名: 未完善</span><br />
                                <span>联系地址: 南京市北京东路330号</span>
                            </div>
                            <div>
                                <span>法人邮箱: 18861851261@163.com</span><br />
                                <span>注册时间: 2020-56-89 88:88:88</span>
                            </div>
                        </div>
                    </div>
                    {/* 订单,记录 */}
                    <div className="orderList">
                        <p>订单记录</p>
                        <div className="orderList-content">
                            {/*  */}
                            <Table bordered columns={this.state.columns} dataSource={this.state.data} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default UserDetail;
