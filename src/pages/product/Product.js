import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import AddProductModal from "./AddProduct";
import EditProductModal from "./EditProduct";
import { connect } from "react-redux";
import productAction from "../../redux/actions/productAction";
import { get, getIn } from "immutable";

const { Option } = Select
  
  
@connect(
  ({ productReducer }) => ({ productReducer }),
  {
    productlist: productAction.productlist,
    productclassify: productAction.productclassify,
    deleteproductlist:productAction.deleteproductlist
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
      // 搜索字段
      search:{
        page:1,
        limit:10,
        companyTypeId:"",
        packageState:"",
        search:""
      },
      //返回字段
      total:"",
      //产品分类列表
      productclassify:[],
      //修改的list
      editList:"",
      data:[
        
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
          dataIndex: 'packageName',
          key: 'packageName',
        },
        {
          title: '产品分类',
          dataIndex: 'companyTypeName',
          key: 'companyTypeName',
        },
        {
          title: '销量',
          key: 'sales',
          dataIndex: 'sales',
        },
        {
          title: '状态',
          key: 'packageState',
          render: (text, record) => {
            // console.log("123",record)
            return (
              <span>
              <span>{record.packageState == 1 ? "上架" : "下架"}</span> &nbsp;
              <Switch checked={ record.packageState == 1 ? true : false } onChange={this.switchOnChange}  />
            </span>
            )
          }
        },
        {
            title: '添加时间',
            key: 'crtTime',
            render: (text, record) => (
              <span>
                <span>{record.crtTime}</span>
                
              </span>
            ),
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record) => {
              // console.log("8888",record)
              return (
                <>
                <span className="btn-diy">
                   <Button onClick={this.editShowModal.bind(this,record)} style={{backgroundColor:"#17A2A9",color:"#FFF",marginRight:"10px"}}>编辑</Button>
                </span>
                <Button onClick={this.showDeleteConfirm.bind(this,record)} type="danger" style={{backgroundColor:"#FF4D4F",color:"#FFF",marginRight:"10px"}}>删除</Button>
                </>
                
              )
            }
          },
      ],
    
      visible: false,
      editVisible:false
    };
  }
componentDidMount(){
  // 产品页面初始化获取产品列表
  this.props.productlist(this.state.search);
  //获取产品分类列表
  this.props.productclassify();
}

searchList= ()=>{
  console.log(this.state.search)
  this.props.productlist(this.state.search);
}



componentWillReceiveProps(nextProps){
  if(nextProps.productReducer && nextProps.productReducer.getIn(["productlist"])){
     console.log("+++++++++++++",nextProps.productReducer.getIn(["productlist","data"]))
     let data = nextProps.productReducer.getIn(["productlist","data"]);
     let list = data.rows;
     for(let i=0 ; i< list.length; i++){
        list[i].key = i+1;
     }
    this.setState({
        total:data.total,
        data:list
    })

  }
  if(nextProps.productReducer && nextProps.productReducer.getIn(["productclassify"])){
    console.log("获取产品分类列表",nextProps.productReducer.getIn(["productclassify"]))
    this.setState({
      productclassify:nextProps.productReducer.getIn(["productclassify","data","rows"])
    })
  }

}








// switchOnChange
switchOnChange = (checked)=>{
   console.log(checked)
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
  editShowModal = (record) => {
    this.setState({
      editVisible: true,
    },()=>{
      this.setState({
        editList:record
      })
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
 showDeleteConfirm = (record) => {
 Modal.confirm({
    title: '是否确认删除此分类?',
    content: '删除后不可恢复',
    okText: '是',
    okType: 'danger',
    cancelText: '否',
    onOk: ()=>{
      console.log('OK');
      this.props.deleteproductlist({packageId :record.packageId});
      setTimeout(()=>{
        this.props.productlist(this.state.search);
      },10)
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}







   onChange(data,value) {
    // console.log(`选中 ${data} ${value}`);
    if(data == "产品分类"){
       this.setState({
        search:{
          page:this.state.search.page,
          limit:this.state.search.limit,
          companyTypeId:value,
          packageState:this.state.search.packageState,
          search:this.state.search.search
        },
       })
    }
    if(data =="产品状态"){
      this.setState({
        search:{
          page:this.state.search.page,
          limit:this.state.search.limit,
          companyTypeId:this.state.search.companyTypeId,
          packageState:value,
          search:this.state.search.search
        },
       })
    }
    if(data =="搜索"){
      this.setState({
        search:{
          page:this.state.search.page,
          limit:this.state.search.limit,
          companyTypeId:this.state.search.companyTypeId,
          packageState:this.state.search.packageState,
          search:value.target.value
        },
       })
    }
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
              style={{ width: "15%",marginRight:"30px" }}
              placeholder="请选择"
              optionFilterProp="children"
              onChange={this.onChange.bind(this,"产品分类")}
            >
              {/* <Option value="jack">个人独资</Option>
              <Option value="lucy">合伙企业</Option>
              <Option value="tom">有限公司</Option>
              <Option value="tom1">个体户</Option> */}
              {
                this.state.productclassify.map((item,key)=>{
                    return <Option key={key} value={item.id}> {item.name} </Option>
                })
              }
            </Select>

            <span>产品状态 </span>
            <Select
              style={{ width: "15%" ,marginRight:"30px"}}
              placeholder="请选择"
              optionFilterProp="children"
              onChange={this.onChange.bind(this,"产品状态")}
            >
              <Option value="1">上架中</Option>
              <Option value="2">下架中</Option>
            </Select>

            <span>搜索</span>
            <Input onChange={this.onChange.bind(this,"搜索")} style={{ width: "20%" ,marginRight:"30px"}}  placeholder="请输入商品名称" />
            <Button onClick={this.searchList} style={{backgroundColor:"#17A2A9",color:"#FFF",marginLeft:"10px"}}>搜索</Button>
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
                pagination={{
                  total:this.state.total,
                  showTotal: (total)=> `共 ${total} 条` 
                }}
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
         data={this.state.editList}
         productclassify={this.state.productclassify}
        >

        </EditProductModal>

      </div>
    );
  }
}

export default Product;
