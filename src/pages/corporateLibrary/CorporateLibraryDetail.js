import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon, Cascader } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom';

const { Option } = Select;
const { RangePicker } = DatePicker

class CorporateLibraryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerList: [
                {
                    name: "首页",
                    url: "/"
                },
                {
                    name: "法人库",
                    url: "/order"
                },
                {
                    name: "法人库详情",
                    url: "/order"
                },
            ],
            columns : [
                {
                  title: '',
                  dataIndex: 'key',
                  key: 'key',
                  render: text => text,
                },
                {
                  title: '公司名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '公司类型',
                  dataIndex: 'type',
                  key: 'type',
                },
                {
                  title: '公司地区',
                  key: 'number',
                //   dataIndex: 'number',
                  render: tags => (
                    <span>
                      江苏省南京市鼓楼区
                    </span>
                  ),
                },
                {
                  title: '注册资金',
                  key: 'state',
                  render: (text, record) => (
                    <span>
                      200万人命币
                    </span>
                  ),
                },
                {
                    title: '纳税类型',
                    key: 'time',
                    render: (text, record) => (
                      <span>
                        <span>{"一般纳税人"}</span>
                        
                      </span>
                    ),
                  },
                  {
                    title: '申请日期',
                    key: 'times',
                    render: (text, record) => (
                      <span>
                        <span>2020-02-99</span>
                        
                      </span>
                    ),
                  },
                  {
                    title: '公司状态',
                    key: 'action',
                    render: (text, record) => (
                      <span>审核中</span>
                      
                    ),
                  },
              ],
              data:[
                {
                  key: '1',
                  name: '套餐一',
                  type: '个人独资',
                  number: 100,
                  state: 1,
                  time:"2019.01.20",
                  action:"操作"
                },
                {
                  key: '2',
                  name: '套餐二',
                  type: "个人独资",
                  number: 100,
                  state: 0,
                  time:"2019.01.20",
                  action:"操作"
                },
                {
                  key: '3',
                  name: '套餐三',
                  type: "个人独资",
                  number: 20,
                  state: 0,
                  time:"2019.01.20",
                  action:"操作"
                },
              ],
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
    }


    render() {
      let { routerList } = this.state
        return (
            <div >
                <BreadeHeader routerList = {routerList}></BreadeHeader>
                {/* 法人详情内容 */}
                <div className="baseContent">
                    {/* top1 */}
                    <div className="baseName">
                        <div>
                            <span>严大海</span>
                            <Button onClick={this.showDeleteConfirm} type="danger" style={{backgroundColor:"#FF4D4F",color:"#FFF",marginRight:"10px"}}>锁定</Button>
                        </div>
                        <div>
                            <span>创建人: XXXX</span>
                            <span>创建时间 : 2020 : 12 : 34</span>
                        </div>
                    </div>
                    {/* top2 */}
                    <div className="baseTop">
                        <div>
                            <span>拥有公司</span>
                            <p>5家</p>
                        </div>
                        <div>
                        <span>审核中的公司</span>
                            <p>5家</p>
                        </div>
                        <div>
                        <span>设立中的公司</span>
                            <p>5家</p>
                        </div>
                        <div>
                        <span>公司所在地区</span>
                            <p>5家</p>
                        </div>
                    </div>
                    {/* top3 */}
                    <div className="baseInfo">
                        <p>基本信息</p>
                        <div className="baseInfo-list">
                            <div className="baseInfo-list-content">
                                <span>法人姓名 : 严大海</span><br/>
                                <span>法人邮箱 : xu_shan_pei@123.com</span>
                            </div>
                            <div className="baseInfo-list-content">
                                <span>法人手机 : 18861851261</span><br/>
                                <span>法人证件 : 已提交</span>
                            </div>
                            <div className="baseInfo-list-content">
                                <span> </span><br/>
                                <span>人脸验证 : 正确</span>
                            </div>
                        </div>
                        {/* pic */}
                        <div className="basePic">
                            {/* 身份证 */}
                            <div>
                                <img src={require("../../assets/image/sfz.png")} alt=""/>
                                <p>身份证正面</p>
                            </div>

                            <div>
                                <img src={require("../../assets/image/sfz.png")} alt=""/>
                                <p>身份证反面</p>
                            </div>
                        </div>
                    </div>

                    {/* top4 */}
                    <div className="baseInfo">
                        <p>严大海的公司列表</p>
                        <div className="baseInfo-table">
                            {/* table */}
                            <Table  bordered  columns={this.state.columns} dataSource={this.state.data} />
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default CorporateLibraryDetail;
