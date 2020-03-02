import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";

const { Option } = Select  ;
const { RangePicker } = DatePicker

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // 筛选属性
        select:{
            orderState:0,
            orderType:0,
            payType:0,
            createTime:0
        },

      routerList: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "订单管理",
          url: "/order"
        }
      ],
      columns : [
        {
          title: '',
          dataIndex: 'key',
          key: 'key',
          render: text => text,
        },
        {
          title: '产品名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '产品分类',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '销量',
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
          title: '状态',
          key: 'state',
          render: (text, record) => (
            <span>
              <span>{record.state == 1 ? "上架" : "下架"}</span> &nbsp;
              <Switch  defaultChecked  />
            </span>
          ),
        },
        {
            title: '添加时间',
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
              <>
              <span className="btn-diy">
                 <Button onClick={this.editShowModal} style={{backgroundColor:"#17A2A9",color:"#FFF",marginRight:"10px"}}>编辑</Button>
              </span>
              <Button onClick={this.showDeleteConfirm} type="danger" style={{backgroundColor:"#FF4D4F",color:"#FFF",marginRight:"10px"}}>删除</Button>
              </>
              
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
      visible: false,
      editVisible:false
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
setOrderState = (value) =>{
    this.setState({
        select:{
            orderState:value,
            orderType:this.state.select.orderType,
            payType:this.state.select.payType,
            createTime:this.state.select.createTime
        }
    })
}

// 订单类型
setOrderType = (value)=>{
    this.setState({
        select:{
            orderState:this.state.select.orderState,
            orderType:value,
            payType:this.state.select.payType,
            createTime:this.state.select.createTime
        }
    })
}
// 支付方式 
setPayType = (value)=>{
   this.setState({
    select:{
        orderState:this.state.select.orderState,
        orderType:this.state.select.orderType,
        payType:value,
        createTime:this.state.select.createTime
    }
   })
}
//创建时间
setCreateTime = (value) =>{
    this.setState({
        select:{
            orderState:this.state.select.orderState,
            orderType:this.state.select.orderType,
            payType:this.state.select.payType,
            createTime:value
        }
       })
}
onChange = (date, dateString) => {
  console.log(date,dateString)
  this.setState({
    select:{
        orderState:this.state.select.orderState,
        orderType:this.state.select.orderType,
        payType:this.state.select.payType,
        createTime:date
    }
   })
}



  

  render() {
    let { routerList } = this.state;
    let {orderState, orderType,payType,createTime } = this.state.select

    return (
      <div className="product-container">
        {/* 产品列表 */}
        {/* 头部 */}
        <BreadeHeader routerList={routerList} />
        {/* 内容部分 */}
        <div className="search-content">
            {/* 筛选 */}
            <div className="line">
                <div>订单状态 ：</div>
                <div>
                    <span onClick = {this.setOrderState.bind(this,0)} className={orderState == 0 ? "active-bg" :""}>全部</span>
                    <span onClick = {this.setOrderState.bind(this,1)} className={orderState == 1 ? "active-bg" :""}>未支付</span>
                    <span onClick = {this.setOrderState.bind(this,2)} className={orderState == 2 ? "active-bg" :""}>已支付</span>
                    <span onClick = {this.setOrderState.bind(this,3)} className={orderState == 3 ? "active-bg" :""}>已取消</span>
                </div>
            </div>
            <div className="line">
                <div>订单类型 ：</div>
                <div>
                    <span onClick = {this.setOrderType.bind(this,0)} className={orderType == 0 ? "active-bg" :""}>全部</span>
                    <span onClick = {this.setOrderType.bind(this,1)} className={orderType == 1 ? "active-bg" :""}>个人独资</span>
                    <span onClick = {this.setOrderType.bind(this,2)} className={orderType == 2 ? "active-bg" :""}>合伙企业</span>
                    <span onClick = {this.setOrderType.bind(this,3)} className={orderType == 3 ? "active-bg" :""}>有限公司</span>
                    <span onClick = {this.setOrderType.bind(this,4)} className={orderType == 4 ? "active-bg" :""}>个体户</span>
                </div>
            </div>
            <div className="line">
                <div>支付方式 ：</div>
                <div>
                    <span onClick = {this.setPayType.bind(this,0)} className={payType == 0 ? "active-bg" :""}>全部</span>
                    <span onClick = {this.setPayType.bind(this,1)} className={payType == 1 ? "active-bg" :""}>支付宝</span>
                    <span onClick = {this.setPayType.bind(this,2)} className={payType == 2 ? "active-bg" :""}>微信支付</span>
                    <span onClick = {this.setPayType.bind(this,3)} className={payType == 3 ? "active-bg" :""}>线下付款</span>
                </div>
            </div>
            <div className="line">
                <div>创建时间 ：</div>
                <div>
                    <span onClick = {this.setCreateTime.bind(this,"")} className={createTime == 0 ? "active-bg" : ""}>全部</span>
                    <RangePicker
                    onChange={this.onChange}
                    // value={}
                  size="small"
                  style={{ width: "259px", }}
                />
                </div>
            </div>

        </div>
        {/* table 部分 */}
            <div className="table-content">
                {/* 123 */}
                <Table bordered  columns={this.state.columns} dataSource={this.state.data} />
            </div>



      </div>
    );
  }
}

export default Order;
