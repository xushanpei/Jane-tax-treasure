import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon, Cascader } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom';
import data from "./city";
import { connect } from "react-redux";
import companyAction from "../../redux/actions/companyAction";

const { Option } = Select;
const { RangePicker } = DatePicker
//getregionbypid

@connect(
    ({ companyReducer, productReducer }) => ({ companyReducer, productReducer }),
    {
         getregionbypid: companyAction.getregionbypid,
    }
)
class CorporateLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options:[],
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
                    name: "法人库",
                    url: "/order"
                }
            ],
            columns: [
                {
                    title: '',
                    dataIndex: 'key',
                    key: 'key',
                    render: text => text,
                },
                {
                    title: '法人姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '法人手机号',
                    dataIndex: 'type',
                    key: 'type',
                },
                {
                    title: '用户手机',
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
                    title: '公司数量',
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
                    title: '最近设立时间',
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
                                    <Link to="/corporateLibraryDetail/0">
                                        法人详情
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="1">
                                    <a href="http://www.taobao.com/">锁定法人</a>
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

    handleSelectedPosition = (value,selectedOptions)=>{
        console.log(value,selectedOptions)
        this.props.getregionbypid({
            pId:value[value.length-1]
        });
    //    setTimeout(()=>{
    //        this.set
    //    },300)


        this.loadData(selectedOptions)

    }
    loadData = selectedOptions => {
      console.log("123123",selectedOptions)

        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
    
        // load options lazily
        setTimeout(() => {
          targetOption.loading = false;
          targetOption.children = [
            {
              label: `${targetOption.label} Dynamic 1`,
              value: 'dynamic1',
            },
            {
              label: `${targetOption.label} Dynamic 2`,
              value: 'dynamic2',
            },
          ];
          this.setState({
            options: [...this.state.options],
          });
        }, 1000);
      };
    


      componentWillMount(){
        //   获取省
          this.props.getregionbypid({
              pId:""
          });
      }
      componentWillReceiveProps(nextProp){
        if(nextProp.companyReducer.getIn(["getregionbypid"])){
            console.log("省",nextProp.companyReducer.getIn(["getregionbypid","data"]))
            let options =[];
            let data = nextProp.companyReducer.getIn(["getregionbypid","data"]);
            for(let i=0; i<data.length; i++){
                options.push({
                    label:data[i].name,
                    value:data[i].id
                })
            }
            this.setState({
                options
            })

        }
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
                        <div>法人地区 ：</div>
                        {/* <div> */}
                        {/* <Cascader
                            size="small"
                            style={{ width: "260px" }}
                            options={this.state.options}
                            onChange={this.handleSelectedPosition.bind(this)}
                            loadData={this.loadData}
                            changeOnSelect
                            placeholder="请选法人地区"
                        /> */}
                        <span>
                        <Select size="small" style={{width:"120px",marginRight:"15px"}}>
                        <Option value="jack">Jack</Option>
                        </Select>
                        <Select size="small" style={{width:"120px",marginRight:"15px"}}>
                        <Option value="jack">Jack</Option>
                        </Select>
                        <Select size="small" style={{width:"120px",marginRight:"15px"}}>
                        <Option value="jack">Jack</Option>
                        </Select>
                        </span>

                        {/* </div> */}
                    </div>
                    <div className="line">
                        <div>设立时间 ：</div>
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
                <div className="tables-contents">
                    {/* 123 */}
                    <Table bordered columns={this.state.columns} dataSource={this.state.data} />
                </div>



            </div>
        );
    }
}

export default CorporateLibrary;
