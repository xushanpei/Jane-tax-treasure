import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import AddCustomerService from "./AddCustomerService";
import EditCustomerService from "./EditCustomerService"
import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";

const { Option } = Select
// key: '1',
//       name: '套餐一',
//       type: 32,
//       number: 'New York No. 1 Lake Park',
//       state: ['nice', 'developer'],
//       time:"2019.01.20",
//       action:"操作"

  
// managerpage
@connect(
  ({ userReducer }) => ({ userReducer }),
  {
    managerpage: userAction.managerpage,
 
  }
)
class CustomerService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:{
        page:1,
        limit:10,
        search:""
      },

      routerList: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "客服管理",
          url: "/product"
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
          title: '客服姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '登录账号',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '部门',
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
              <span>{record.state == 1 ? "锁定" : "开放"}</span> &nbsp;
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
          name: 'xsp',
          type: '12345678',
          number: "技术中心",
          state: 1,
          time:"2019.01.20",
          action:"操作"
        },
        {
          key: '2',
          name: 'xsp',
          type: "12345678",
          number: "技术中心",
          state: 0,
          time:"2019.01.20",
          action:"操作"
        },
        {
          key: '3',
          name: 'xsp',
          type: "12345678",
          number: "技术中心",
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

componentWillMount(){
  this.props.managerpage(this.state.search)
}







   onChange(value) {
    console.log(`selected ${value}`);
  }
  
   onBlur() {
    console.log('blur');
  }
  
   onFocus() {
    console.log('focus');
  }
  
   onSearch(val) {
    console.log('search:', val);
  }

  render() {
    let { routerList } = this.state;

    return (
      <div className="product-container">
        {/* 产品列表 */}
        {/* 头部 */}
        <BreadeHeader routerList={routerList} />
        {/* 内容部分 */}
        <div className="search-content">
          <div>

            <span>搜索</span>
            <Input onChange={this.onChange} style={{ width: "20%" ,marginRight:"30px"}}  placeholder="请输入客服姓名" />
            <Button style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px"}}>搜索</Button>
            {/* <Button style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px"}}>导出</Button> */}

            <br/>
            <Button onClick={this.showModal} style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"0px",marginTop:"15px"}}>新增客服</Button>
          </div>
        </div>
        {/* table 部分 */}
            <div className="table-content">
                {/* 123 */}
                <Table bordered  columns={this.state.columns} dataSource={this.state.data} />
            </div>

{/* 新增产品 */}
        <AddCustomerService
          title="新增客服"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        </AddCustomerService>

        {/* 编辑 */}
        <EditCustomerService 
         title="编辑客服"
         visible={this.state.editVisible}
         onOk={this.editHandleOk}
         onCancel={this.editHandleCancel}
        >

        </EditCustomerService>

      </div>
    );
  }
}

export default CustomerService;
