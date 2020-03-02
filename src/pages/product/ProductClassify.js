import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import AddProductClassify from  "./AddProductClassify";
import  EditProductClassify from  "./EditProductClassify"

const { Option } = Select
// key: '1',
//       name: '套餐一',
//       type: 32,
//       number: 'New York No. 1 Lake Park',
//       state: ['nice', 'developer'],
//       time:"2019.01.20",
//       action:"操作";
  


class ProductClassify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerList: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "产品分类",
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
      columns:[
        {
          title: '',
          dataIndex: 'key',
          key: 'key',
          render: text => text,
        },
        {
          title: '分类名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '分类排序',
          dataIndex: 'type',
          key: 'type',
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
      ]
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
      <div className="product-container">
        {/* 产品列表 */}
        {/* 头部 */}
        <BreadeHeader routerList={routerList} />
        {/* 内容部分 */}
      {/* table 部分 */}
      
            <div className="table-content table-content-2">
            <Button onClick={this.showModal} style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px",marginTop:"15px",marginBottom:"15px"}}>新增分类</Button>
                {/* 123 */}
                <Table  bordered columns={this.state.columns} dataSource={this.state.data} />
            </div>

{/* 新增产品 */}
<AddProductClassify
          title="新增分类"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        </AddProductClassify>

        {/* 编辑 */}
        <EditProductClassify 
         title="编辑分类"
         visible={this.state.editVisible}
         onOk={this.editHandleOk}
         onCancel={this.editHandleCancel}
        >

        </EditProductClassify>

      </div>
    );
  }
}

export default ProductClassify;
