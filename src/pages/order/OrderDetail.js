// 订单详情
import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";


const { Option } = Select;
const { TextArea } = Input;
// key: '1',
//       name: '套餐一',
//       type: 32,
//       number: 'New York No. 1 Lake Park',
//       state: ['nice', 'developer'],
//       time:"2019.01.20",
//       action:"操作";
  


class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerList: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "订单管理",
          url: "/product"
        },
        {
            name: "订单详情",
            url: "/product"
        }

      ],
      data:[
        {
          key: '1',
          name: '套餐一',
          type: '个人独资',
          number: 100,
          state: 1,
          time:"2019.01.20",
          action:"操作",
          actions:"1"
        }
      ],
      columns:[
        {
          title: '订单号',
          dataIndex: 'key',
          key: 'key',
          render: text => text,
        },
        {
          title: '创建时间',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '买家',
          dataIndex: 'type',
          key: 'type',
        },
        {
            title: '订单金额',
            key: 'time',
            render: (text, record) => (
              <div>
                <p>订单总额 : ￥3600</p>
                <p>后台改价 : -￥600</p>
                <p>实付款金额 : ￥3000</p>
              </div>
            ),
          },
          {
            title: '支付方式',
            key: 'action',
            render:(text,record)=>(
                <span>线下支付</span>
            )
          },
          {
            title: '交易状态',
            key: 'actions',
            render:(text,record)=>(
                <span>付款 / 待支付</span>
            )
                
            
          },
      ],
      // 订单记录
      dataList:[
        {
          key: '1',
          name: '2020-02-16  15:26:26',
          type: '订单生成',
          number: "用户",
        },
        {
          key: '2',
          name: '2020-02-16  15:26:26',
          type: '用户付款失败',
          number: "用户",
        },
        {
          key: '3',
          name: '2020-02-16  15:26:26',
          type: '用户付款成功',
          number: "用户",
        },
        {
          key: '4',
          name: '2020-02-16  15:26:26',
          type: '订单完成',
          number: "系统",
        },
      ],
      columnsList:[
        {
          title: '操作时间',
          dataIndex: 'name',
          key: 'name',
          render: text => text,
        },
        {
          title: '操作记录',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '操作人',
          dataIndex: 'number',
          key: 'number',
        }
      ]
    };
  }

  componentDidMount (){
    //   接受路由传的参数

   console.log("路由传过来的id", this.props.match.params.id);
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
    title: '是否确认删除此产品?',
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

  render() {
    let { routerList } = this.state;

    return (
      <div className="orderDetail">
        {/* 产品列表 */}
        {/* 头部 */}
        <BreadeHeader routerList={routerList} />
        {/* 内容部分 */}
      {/* table 部分 */}
      
            <div className="orderDetail-container">
            {/* <Button onClick={this.showModal} style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px",marginTop:"15px",marginBottom:"15px"}}>新增分类</Button> */}
                {/* 123 */}
                {/* <Table  bordered columns={this.state.columns} dataSource={this.state.data} /> */}

                {/* 状态条 */}
                <div className="progress">
                    <div>
                        <span>下单时间</span><br/>
                        <span>2020-02-16  15:26:26</span>
                    </div>
                    <div>
                        <span>付款</span><br/>
                        <span>2020-02-16  15:26:26</span>
                    </div>
                    <div>
                        <span>订单完成</span><br/>
                        <span>2020-02-16  15:26:26</span>
                    </div>
                </div>
                <p style={{width:"58%"}} className="progress-line"></p>

                {/* 基本信息 */}
                <div className="order-list-content">
                    <p className="order-title">
                        基本信息
                    </p>
                    {/* 表格 */}
                    <Table pagination={false} size="small"  bordered columns={this.state.columns} dataSource={this.state.data} />
                </div>

                {/* 产品信息 */}
                <div className="order-list-content">
                    <p className="order-title">
                        产品信息
                    </p>
                    {/* 表格 */}
                    <Table pagination={false} size="small"  bordered columns={this.state.columns} dataSource={this.state.data} />
                </div>
                
                {/* 已完成  付款信息 */}
                <div className="order-list-content">
                    <p className="order-title">
                        付款信息
                    </p>
                    {/* 表格 */}
                    <Table pagination={false} size="small"  bordered columns={this.state.columns} dataSource={this.state.data} />
                </div>

                {/* 已完成  付款信息  线下支付 */}
                <div className="order-list-content">
                    <p className="order-title">
                        付款信息
                    </p>
                    {/* 表格 */}
                    <Table pagination={false} size="small"  bordered columns={this.state.columns} dataSource={this.state.data} />
                </div>

                {/* 订单备注 */}
                <div className="order-list-content">
                    <p className="order-title">
                        订单备注
                    </p>
                    <TextArea disabled value="这里是备注信息"></TextArea>
                </div>

                {/* 订单记录 */}
                <div className="order-list-content">
                    <p className="order-title">
                        订单记录
                    </p>
                    {/* 表格 */}
                    <Table pagination={false} size="small"  bordered columns={this.state.columnsList} dataSource={this.state.dataList} />
                </div>
                <p style={{textAlign:"center"}}>
                    <Button  style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px",marginTop:"15px",marginBottom:"15px"}}>款项已到确认收款</Button>
                </p>
                
            </div>



      </div>
    );
  }
}

export default OrderDetail;
