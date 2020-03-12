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
        companyweblist: companyAction.companyweblist,
        companydetailweb: companyAction.companydetailweb,
        //获取公司类型
        productclassify: productAction.productclassify,
    }
)
class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailId: "",
            companyStatus: ""
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



    }


    render() {
        let { companyStatus } = this.state
        console.log(companyStatus)
        return (
            <div className="companyState">
                {/* 根据不同的状态加载不同的组件 */}
                {/* 
                companyStatus :   1:待设立 2:审核中 2-1:复审核中 3:设立中 4:已设立’
          */}
                {
                    companyStatus == "1" ? <CompanyListOne></CompanyListOne> : ""
                }
                {
                    companyStatus == "2" ? <CompanyListOne></CompanyListOne> : ""
                }
                {
                    companyStatus == "2-1" ? <CompanyListOneRepeat></CompanyListOneRepeat> : ""
                }
                {
                    companyStatus == "3" ? <CompanyListTwo></CompanyListTwo> : ""
                }
                {
                    companyStatus == "4" ? <CompanyListThree></CompanyListThree> : ""
                }

                {/* <CompanyListTwo></CompanyListTwo>
          <CompanyListThree></CompanyListThree> */}
            </div>
        );
    }
}

export default CompanyDetail;
