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
//
import CompanyListOne from "./CompanyListOne";
import CompanyListOneRepeat from "./CompanyListOneRepeat"
import CompanyListTwo from "./CompanyListTwo";
import CompanyListThree from "./CompanyListThree"


const { Option } = Select;
const { RangePicker } = DatePicker


@connect(
    ({ companyReducer, productReducer }) => ({ companyReducer, productReducer }),
    {
        // companyweblist: companyAction.companyweblist,
        // companydetailweb: companyAction.companydetailweb,
        // //获取公司类型
        // productclassify: productAction.productclassify,
        //基本信息,对接人信息
        getbasiccompany:companyAction.getbasiccompany,
        //操作记录
        getcompanyoperaterecord:companyAction.getcompanyoperaterecord,
        //头部返回信息
        companyoperatedetail:companyAction.companyoperatedetail,
        //补全资料信息
        getcompletedata:companyAction.getcompletedata
    }
)
class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailId: "",
            companyStatus: "",
            //id 的基本信息对接人信息
            getbasiccompany:"",
            //操作记录
            getcompanyoperaterecord:"",
            //头部返回信息
            headerData:"",
            //资料补全信息
            getcompletedata:"",

        };
    }

    componentWillMount() {
        //id
        console.log(this.props.match.params.data);
        //公司列表
        console.log("公司列表", this.props.companyReducer.getIn(["companyweblist", "data", "rows"]));
        let data = this.props.companyReducer.getIn(["companyweblist", "data", "rows"]);
        for (let i = 0; i < data.length; i++) {
            if (this.props.match.params.data == data[i].companyId) {
                console.log("bababbabababa")
                this.setState({
                    detailId: this.props.match.params.data,
                    companyStatus: data[i].companyStatus
                })
            }
        }
    //获取公司操作基本信息,对接人信息
    this.props.getbasiccompany({
        companyId: this.props.match.params.data
    })
    //操作记录
    this.props.getcompanyoperaterecord({
        companyId: this.props.match.params.data
    })
    //头部返回信息
    this.props.companyoperatedetail({
        companyId: this.props.match.params.data
    })
     //补全资料信息
     this.props.getcompletedata({
        companyId: this.props.match.params.data
     })

    }

    componentWillReceiveProps(nextProps){
       
        if(nextProps.companyReducer.getIn(["getbasiccompany","data"])){
            
            this.setState({
                getbasiccompany:nextProps.companyReducer.getIn(["getbasiccompany","data"])
            }) 
        }
        if(nextProps.companyReducer.getIn(["getcompanyoperaterecord"])){
            //未传props
            console.log("操作记录",nextProps.companyReducer.getIn(["getcompanyoperaterecord"]));
            this.setState({
                getcompanyoperaterecord: nextProps.companyReducer.getIn(["getcompanyoperaterecord","data"])
            })
        }
        //头部返回信息监听
        if(nextProps.companyReducer.getIn(["companyoperatedetail","data"])){
           console.log("头部返回信息",nextProps.companyReducer.getIn(["companyoperatedetail","data"]));
           this.setState({
               headerData: nextProps.companyReducer.getIn(["companyoperatedetail","data"])
           })
        }
        //补全资料信息
        if(nextProps.companyReducer.getIn(["getcompletedata"])){
            console.log("补全资料信息",nextProps.companyReducer.getIn(["getcompletedata"]));
            this.setState({
                getcompletedata: nextProps.companyReducer.getIn(["getcompletedata","data"])
            })
        }
    }






    // 修改状态的方法
    //状态一旦修改,数据需要重新获取

    changeState = (state)=>{
      this.setState({
        companyStatus :state
      },()=>{
           //获取公司操作基本信息,对接人信息
    this.props.getbasiccompany({
        companyId: this.props.match.params.data
    })
    //操作记录
    this.props.getcompanyoperaterecord({
        companyId: this.props.match.params.data
    })
    //头部返回信息
    this.props.companyoperatedetail({
        companyId: this.props.match.params.data
    })
      })
    }








    render() {
        let { companyStatus , getbasiccompany,getcompanyoperaterecord,headerData,getcompletedata} = this.state
        console.log(companyStatus)
        return (
            <div className="companyState">
                {/* 根据不同的状态加载不同的组件 */}
                {/* 
                companyStatus :   1:待设立 2:审核中 2-1:复审核中 3:设立中 4:已设立’
          */}
                {
                    // companyStatus == "1" ? <CompanyListOne headerData={headerData} baseInfo = {getbasiccompany} getcompanyoperaterecord={getcompanyoperaterecord}></CompanyListOne> : ""
                }
                {
                    companyStatus == "2" ? <CompanyListOne changeState={this.changeState} headerData={headerData} baseInfo = {getbasiccompany} getcompanyoperaterecord={getcompanyoperaterecord}></CompanyListOne> : ""
                }
                {
                    companyStatus == "2-1" ? <CompanyListOneRepeat getcompletedata={getcompletedata} changeState={this.changeState} headerData={headerData} baseInfo = {getbasiccompany} getcompanyoperaterecord={getcompanyoperaterecord}></CompanyListOneRepeat> : ""
                }
                {
                    companyStatus == "3" ? <CompanyListTwo changeState={this.changeState} headerData={headerData} baseInfo = {getbasiccompany} getcompanyoperaterecord={getcompanyoperaterecord}></CompanyListTwo> : ""
                }
                {
                    companyStatus == "4" ? <CompanyListThree changeState={this.changeState} headerData={headerData} baseInfo = {getbasiccompany} getcompanyoperaterecord={getcompanyoperaterecord}></CompanyListThree> : ""
                }

            </div>
        );
    }
}

export default CompanyDetail;
