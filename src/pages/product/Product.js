import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import AddProductModal from "./AddProduct";
import EditProductModal from "./EditProduct";
import { connect } from "react-redux";
import productAction from "../../redux/actions/productAction"

const { Option } = Select
  
  
@connect(
  ({ productReducer }) => ({ productReducer }),
  {
    productlist: productAction.productlist,
    
  }
)
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerList: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "产品管理",
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
componentWillMount(){
  // 产品页面初始化获取产品列表
  this.props.productlist();
}

componentWillReceiveProps(nextProps){
  if(nextProps){
     console.log("+++++++++++++",nextProps.productReducer)
  }
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
              <span>产品分类</span>
            <Select
              showSearch
              style={{ width: "15%",marginRight:"30px" }}
              placeholder="请选择"
              optionFilterProp="children"
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              
            >
              <Option value="jack">个人独资</Option>
              <Option value="lucy">合伙企业</Option>
              <Option value="tom">有限公司</Option>
              <Option value="tom1">个体户</Option>
            </Select>

            <span>产品状态 </span>
            <Select
              showSearch
              style={{ width: "15%" ,marginRight:"30px"}}
              placeholder="请选择"
              optionFilterProp="children"
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              
            >
              <Option value="jack1">上架中</Option>
              <Option value="lucy2">下架中</Option>
            </Select>

            <span>搜索</span>
            <Input style={{ width: "20%" ,marginRight:"30px"}}  placeholder="请输入商品名称" />
            <Button style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px"}}>搜索</Button>
            <Button style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px"}}>导出</Button>

            <br/>
            <Button onClick={this.showModal} style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px",marginTop:"15px"}}>新增产品</Button>
          </div>
        </div>
        {/* table 部分 */}
            <div className="table-content">
                {/* 123 */}
                <Table 
                bordered 
                total={50} 
                columns={this.state.columns} 
                dataSource={this.state.data} />
            </div>

{/* 新增产品 */}
        <AddProductModal
          title="新增产品"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        </AddProductModal>

        {/* 编辑 */}
        <EditProductModal 
         title="编辑产品"
         visible={this.state.editVisible}
         onOk={this.editHandleOk}
         onCancel={this.editHandleCancel}
        >

        </EditProductModal>

      </div>
    );
  }
}

export default Product;
