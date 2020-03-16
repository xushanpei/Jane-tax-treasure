import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import billAction from "../../redux/actions/billAction";
import productAction from "../../redux/actions/productAction";

const { Option } = Select;
const { RangePicker } = DatePicker


@connect(
  ({ billReducer, productReducer }) => ({ billReducer, productReducer }),
  {
    //获取公司类型
    productclassify: productAction.productclassify,
    invoicepage:billAction.invoicepage
  }
)
class BillList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 筛选属性
      select: {
        page:1,
        limit:5,
        invoiceType:"",
        companyType:"",
        date:""
      },
      searchValue: "",
      routerList: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "发票列表",
          url: "/order"
        }
      ],
      columns: [
        {
          title: '',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: '申请公司',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '开票时间',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '公司类型',
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
          title: '发票类型',
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
          title: '发票金额',
          key: 'payType',
          dataIndex: 'payType',
          // render: (text, record) => (
          //   <span>
          //     <span>{record.state == 1 ? "上架" : "下架"}</span> &nbsp;
          //     <Switch  defaultChecked  />
          //   </span>
          // ),
        },
        {
          title: '客户名称',
          key: 'orderState',
          dataIndex: 'orderState',
          // render: (text, record) => (
          //   <span>
          //     <span>{record.state == 1 ? "上架" : "下架"}</span> &nbsp;
          //     <Switch  defaultChecked  />
          //   </span>
          // ),
        },
        {
          title: '发票代码',
          key: 'time1',
          render: (text, record) => (
            <span>
              <span>{record.time}</span>
            </span>
          ),
        },
        {
            title: '发票号码',
            key: 'time2',
            render: (text, record) => (
              <span>
                <span>{record.time}</span>
              </span>
            ),
          },
          {
            title: '开户银行',
            key: 'time3',
            render: (text, record) => (
              <span>
                <span>{record.time}</span>
              </span>
            ),
          },
          {
            title: '开户账号',
            key: 'time4',
            render: (text, record) => (
              <span>
                <span>{record.time}</span>
              </span>
            ),
          },
          {
            title: '地址',
            key: 'time5',
            render: (text, record) => (
              <span>
                <span>{record.time}</span>
              </span>
            ),
          },
          {
            title: '电话',
            key: 'time6',
            render: (text, record) => (
              <span>
                <span>{record.time}</span>
              </span>
            ),
          }
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

  // 添加 modal 用的方法
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

  // 编辑 modal 用的方法
  editShowModal = () => {
    this.setState({
      editVisible: true,
    });
  };

  editHandleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  editHandleCancel = e => {
    console.log(e);
    this.setState({
      editVisible: false,
    });
  };


  // 删除确认框
  showDeleteConfirm = () => {
    Modal.confirm({
      title: '是否确认删除此分类?',
      content: '删除后不可恢复',
      okText: '是',
      okType: 'danger',
      cancelText: '否',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // 订单状态
  setOrderState = (value) => {
    this.setState({
      select: Object.assign(this.state.select, { invoiceType:value })
    })
  }

  // 订单类型
  setOrderType = (value) => {
    this.setState({
      select: Object.assign(this.state.select, { companyType: value })
    },()=>{
      console.log(this.state.select)
    })
  }
 
  //时间
  setCreateTime = (value) => {
    if (value == "") {
      this.setState({
        select: Object.assign(this.state.select,{ date: value }),
        searchValue: value
      })
    }

  }
  onChange = (date, dateString) => {
    console.log(date, dateString)
    this.setState({
      select:Object.assign(this.state.select,{ date: dateString }),
      searchValue: date
    })
  }

  componentWillMount(){
    this.props.productclassify({
      page:1,
      limit:100
    })
    //获取发票列表
     this.props.invoicepage(this.state.select)
  }

  componentWillReceiveProps(nextProps){
   if(nextProps.productReducer.getIn(["productclassify","data","rows"])){
      console.log("公司类型", nextProps.productReducer.getIn(["productclassify","data","rows"]))
      this.setState({
        companyTypeList: nextProps.productReducer.getIn(["productclassify","data","rows"])
      })
   }
   //发票列表
   if(nextProps.billReducer.getIn(["invoicepage"])){
      console.log("发票,列表", nextProps.billReducer.getIn(["invoicepage"]))
      let data = nextProps.billReducer.getIn(["invoicepage","data","rows"])
      for(let i=0; i< data.length; i++){
         data[i].key = i+1;
      }
      this.setState({
        data
      })
   }
  }





  render() {
    let { routerList, searchValue , companyTypeList} = this.state;
    let { invoiceType, companyType, date } = this.state.select

    return (
      <div className="product-container">
        {/* 产品列表 */}
        {/* 头部 */}
        <BreadeHeader routerList={routerList} />
        {/* 内容部分 */}
        <div className="search-content">
          {/* 筛选 */}
          <div className="line">
            <div>发票类型 ：</div>
            <div>
              <span onClick={this.setOrderState.bind(this, "")} className={invoiceType == "" ? "active-bg" : ""}>全部</span>
              <span onClick={this.setOrderState.bind(this, 1)} className={invoiceType == 1 ? "active-bg" : ""}>增值税普通发票</span>
              <span onClick={this.setOrderState.bind(this, 2)} className={invoiceType == 2 ? "active-bg" : ""}>增值税专用发票</span>
            </div>
          </div>
          <div className="line">
            <div>公司类型 ：</div>
            <div>
              <span onClick={this.setOrderType.bind(this, "")} className={companyType == "" ? "active-bg" : ""}>全部</span>
              {
                companyTypeList ?  companyTypeList.map((item,key)=>{
                return <span key={key} onClick={this.setOrderType.bind(this, item.id)} className={companyType == item.id ? "active-bg" : ""}>{item.name}</span>
                }) : ""
              }
            </div>
          </div>

          <div className="line">
            <div>申请时间 ：</div>
            <div>
              <span onClick={this.setCreateTime.bind(this, "")} className={date == "" ? "active-bg" : ""}>全部</span>
              <RangePicker
                onChange={this.onChange}
                value={searchValue}
                size="small"
                style={{ width: "259px", }}
              />
            </div>
          </div>
          {/* <div className="line">
            <div>搜索 ：</div>
            <div>
              <Input style={{ width: "260px", marginLeft: "28px" }} size="small" placeholder="请输入手机号和订单号"></Input>
            </div>
          </div> */}

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

export default BillList;
