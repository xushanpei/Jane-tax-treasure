import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon, Cascader } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom';


const { Option } = Select;
const { RangePicker } = DatePicker

class User extends Component {
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
                }
            ],
            columns: [
                {
                    title: '用户ID',
                    dataIndex: 'key',
                    key: 'key',
                    render: text => text,
                },
                {
                    title: '头像',
                    // dataIndex: 'name',
                    key: 'name',
                    render: () => (
                        <div className="avatar">
                            <img src={require("../../assets/image/jsb-logoX.png")} alt=""/>
                        </div>
                    )
                },
                {
                    title: '手机号',
                    dataIndex: 'type',
                    key: 'type',
                },
                {
                    title: '姓名',
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
                    title: '电子邮箱',
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
                    title: '购买次数',
                    key: 'num',
                    dataIndex: 'num',
                    // render: (text, record) => (
                    //   <span>
                    //     <span>{record.state == 1 ? "上架" : "下架"}</span> &nbsp;
                    //     <Switch  defaultChecked  />
                    //   </span>
                    // ),
                },
                {
                    title: '加入时间',
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
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item key="0">
                                    <Link to="/userDetail/0">
                                        用户详情
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="1">
                                    <span onClick={this.deleteUser}>删除</span>
                                </Menu.Item>
                            </Menu>
                        } trigger={['click']}>
                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                操作 <Icon type="down" />
                            </span>
                        </Dropdown>

                    ),
                },
            ],
            data: [
                {
                    key: '1',
                    name: '套餐一',
                    type: '18861851261',
                    number: "舜贝佳",
                    state: "xu_shan_pei@163.com",
                    num:100,
                    payType: "100",
                    orderState: "已支付",
                    time: "2019.01.20",
                    action: "操作"
                },
                {
                    key: '2',
                    name: '套餐一',
                    type: '18861851261',
                    number: "舜贝佳",
                    state: "xu_shan_pei@163.com",
                    num:100,
                    payType: "100",
                    orderState: "已支付",
                    time: "2019.01.20",
                    action: "操作"
                },
                {
                    key: '3',
                    name: '套餐一',
                    type: '18861851261',
                    number: "舜贝佳",
                    state: "xu_shan_pei@163.com",
                    num:100,
                    payType: "100",
                    orderState: "已支付",
                    time: "2019.01.20",
                    action: "操作"
                },
            ],
            visible: false,
            editVisible: false
        };
    }


    //时间
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

    deleteUser = () => {
        console.log("提示是否需要删除");
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
                <div className="search-content">
                    {/* 筛选 */}
                    <div className="line">
                        <div>注册时间 ：</div>
                        <div>
                            <span onClick={this.setCreateTime.bind(this, "")} className={createTime == 0 ? "active-bg" : ""}>全部</span>
                            <RangePicker
                                onChange={this.onChange}
                                value={searchValue}
                                size="small"
                                style={{ width: "259px", }}
                            />
                        </div>
                    </div>
                    <div className="line">
                        <div>搜索 ：</div>
                        <div>
                            <Input style={{ width: "260px", marginLeft: "28px" }} size="small" placeholder="请输入手机号和订单号"></Input>
                        </div>
                    </div>

                    <div className="line">
                        <div></div>
                        <div style={{ marginLeft: "62px" }}>
                            <Button style={{ backgroundColor: "#17A2A9", color: "#FFF", marginLeft: "10px" }}>搜索</Button>
                            <Button style={{ backgroundColor: "#17A2A9", color: "#FFF", marginLeft: "10px" }}>导出</Button>
                        </div>
                    </div>

                </div>
                {/* table 部分 */}
                <div className="table-content">
                    {/* 123 */}
                    <Table bordered columns={this.state.columns} dataSource={this.state.data} />
                </div>



            </div>
        );
    }
}

export default User;
