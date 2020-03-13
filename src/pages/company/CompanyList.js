import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import companyAction from "../../redux/actions/companyAction";
import productAction from "../../redux/actions/productAction";

const { Option } = Select;
const { RangePicker } = DatePicker


@connect(
  ({ companyReducer, productReducer }) => ({ companyReducer, productReducer }),
  {
    companyweblist: companyAction.companyweblist,
    companydetailweb: companyAction.companydetailweb,
    //获取公司类型
    productclassify: productAction.productclassify,
  }
)
class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //公司类型
      productclassify: [],
      // 筛选属性
      select: {
        page: 1,
        limit: 5,
        companyStatus: "",
        companyTypeId: "",
        establishBeginTime: "",
        establishEndTime: "",
        search: ""
      },
      searchValue: "",
      routerList: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "公司列表",
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
          title: '公司名称',
          dataIndex: 'companyName',
          key: 'companyName',
        },
        {
          title: '公司类型',
          dataIndex: 'companyTypeName',
          key: 'companyTypeName',
        },
        {
          title: '公司地区',
          key: 'companyRegion',
          dataIndex: 'companyRegion',
        },
        {
          title: '公司行业',
          key: 'industryName',
          dataIndex: 'industryName',
        },
        {
          title: '公司法人',
          key: 'legalName',
          dataIndex: 'legalName',
        },
        {
          title: '设立状态',
          key: 'companyStatus',
          // dataIndex: 'companyStatus',
          render: (text, record) => {
            console.log(record.companyStatus)
            if (record.companyStatus == 1) {
              return <span>待设立</span>
            }
            if (record.companyStatus == 2) {
              return <span>审核中</span>
            }
            if (record.companyStatus == "2-1") {
              return <span>复审核</span>
            }
            if (record.companyStatus == 3) {
              return <span>设立中</span>
            }
            if (record.companyStatus == 4) {
              return <span>已设立</span>
            }

          },
        },
        {
          title: '设立时间',
          key: 'submitEstablishTime',
          dataIndex: "submitEstablishTime",
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => {
            if( record.companyStatus !=1 ){
              return   <Dropdown overlay={
                <Menu>
                  {/* record.companyStatus */}
                  <Menu.Item key="0">
                    <Link to={`/companyDetail/${record.companyId}`}>
                      公司操作
                      </Link>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <Link to="/companyListThree">
                      公司详情
                      </Link>
                  </Menu.Item>
                </Menu>
              } trigger={['click']}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  操作 <Icon type="down" />
                </span>
              </Dropdown>
            }
          },
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

  // 公司状态
  setOrderState = (value) => {
    this.setState({
      select: Object.assign(this.state.select, { companyStatus: value })
    }, () => {
      console.log("修改后的值", this.state.select)
    })
  }

  // 订单类型
  setOrderType = (value) => {
    this.setState({
      select: Object.assign(this.state.select, { companyTypeId: value })
    }, () => {
      console.log(this.state.select)
    })
  }

  //创建时间
  setCreateTime = (value) => {
    if (value == "") {
      this.setState({
        select: Object.assign(this.state.select, {
          establishBeginTime: value,
          establishEndTime: value
        }),
        searchValue: value
      })
    }

  }
  onChange = (date, dateString) => {
    console.log(date, dateString)
    this.setState({
      select: Object.assign(this.state.select, {
        establishBeginTime: dateString[0],
        establishEndTime: dateString[1]
      }),
      searchValue: date
    })
  }
  searChange = (e) => {
    this.setState({
      select: Object.assign(this.state.select, {
        search: e.target.value
      }),
    })
  }
  // 搜所按钮
  searchClick = () => {
    this.props.companyweblist(this.state.select)
  }

  paginationChange = (current)=>{
    console.log(current)
    this.setState({
      select: Object.assign(this.state.select,{page:current})
    },()=>{
      // 获取分页数据
      this.props.companyweblist(this.state.select)
    })
  }

  componentWillMount() {
    //获取公司类型
    this.props.productclassify({
      page: 1,
      limit: 100
    })
    //  获取公司列表
    this.props.companyweblist(this.state.select)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.productReducer.getIn(["productclassify"])) {
      console.log("公司类型", nextProps.productReducer.getIn(["productclassify", "data", "rows"]))
      this.setState({
        productclassify: nextProps.productReducer.getIn(["productclassify", "data", "rows"])
      })
    }
    //公司列表
    if (nextProps.companyReducer.getIn(["companyweblist"])) {
      console.log("公司列表", nextProps.companyReducer.getIn(["companyweblist", "data", "rows"]))
      let data = nextProps.companyReducer.getIn(["companyweblist", "data", "rows"]);
      let total = nextProps.companyReducer.getIn(["companyweblist", "data", "total"]);
      for (let i = 0; i < data.length; i++) {
        data[i].key = i + 1;
      }
      this.setState({
        data,
        total
      })
    }
  }



  render() {
    let { routerList, searchValue, productclassify } = this.state;
    let { companyStatus, companyTypeId, establishBeginTime, establishEndTime } = this.state.select

    return (
      <div className="product-container">
        {/* 产品列表 */}
        {/* 头部 */}
        <BreadeHeader routerList={routerList} />
        {/* 内容部分 */}
        <div className="search-content">
          {/* 筛选 */}
          <div className="line">
            <div>公司状态 ：</div>
            <div>
              <span onClick={this.setOrderState.bind(this, "")} className={companyStatus == "" ? "active-bg" : ""}>全部</span>
              <span onClick={this.setOrderState.bind(this, 1)} className={companyStatus == 1 ? "active-bg" : ""}>待设立</span>
              <span onClick={this.setOrderState.bind(this, 2)} className={companyStatus == 2 ? "active-bg" : ""}>审核中</span>
              <span onClick={this.setOrderState.bind(this, 3)} className={companyStatus == 3 ? "active-bg" : ""}>设立中</span>
              <span onClick={this.setOrderState.bind(this, 4)} className={companyStatus == 4 ? "active-bg" : ""}>已设立</span>
            </div>
          </div>
          <div className="line">
            <div>公司类型 ：</div>
            <div>
              <span onClick={this.setOrderType.bind(this, "")} className={companyTypeId == "" ? "active-bg" : ""}>全部</span>
              {
                productclassify ? productclassify.map((item, key) => {
                  return <span key={key} onClick={this.setOrderType.bind(this, item.id)} className={companyTypeId == item.id ? "active-bg" : ""}>{item.name}</span>
                }) : ""
              }
            </div>
          </div>
          <div className="line">
            <div>设立时间 ：</div>
            <div>
              <span onClick={this.setCreateTime.bind(this, "")} className={establishBeginTime == "" || establishEndTime == "" ? "active-bg" : ""}>全部</span>
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
              <Button onClick={this.searchClick} style={{ backgroundColor: "#17A2A9", color: "#FFF", marginLeft: "10px" }}>搜索</Button>
              <Button style={{ backgroundColor: "#17A2A9", color: "#FFF", marginLeft: "10px" }}>导出</Button>
            </div>
          </div>

        </div>
        {/* table 部分 */}
        <div className="tables-content">
          {/* 123 */}
          <Table bordered 
          rowSelection={{
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
          }}
          pagination={{
            total: this.state.total,
            showTotal: (total) => `共 ${total} 条`,
            onChange: (current) => this.paginationChange(current),
            pageSize: this.state.select.limit,
          }}
          columns={this.state.columns} dataSource={this.state.data} />
        </div>



      </div>
    );
  }
}

export default CompanyList;
