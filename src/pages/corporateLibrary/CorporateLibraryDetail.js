import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, DatePicker, Menu, Dropdown, Icon, Cascader } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import moment from "moment";
import { Link } from 'react-router-dom';

const { Option } = Select;
const { RangePicker } = DatePicker

class CorporateLibraryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerList: [
                {
                    name: "首页",
                    url: "/"
                },
                {
                    name: "法人库",
                    url: "/order"
                },
                {
                    name: "法人库详情",
                    url: "/order"
                },
            ],
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
    }


    render() {
      let { routerList } = this.state
        return (
            <div >
                <BreadeHeader routerList = {routerList}></BreadeHeader>
                {/* 法人详情内容 */}
                <div className="baseContent">
                    {/* top1 */}
                    <div className="baseName">
                        <div>
                            <span>严大海</span>
                            <Button onClick={this.showDeleteConfirm} type="danger" style={{backgroundColor:"#FF4D4F",color:"#FFF",marginRight:"10px"}}>锁定</Button>
                        </div>
                        <div>
                            <span>创建人: XXXX</span>
                            <span>创建时间 : 2020 : 12 : 34</span>
                        </div>
                    </div>
                    {/* top2 */}
                    <div className="baseTop">
                        <div>
                            <span>拥有公司</span>
                            <p>5家</p>
                        </div>
                        <div>
                        <span>审核中的公司</span>
                            <p>5家</p>
                        </div>
                        <div>
                        <span>设立中的公司</span>
                            <p>5家</p>
                        </div>
                        <div>
                        <span>公司所在地区</span>
                            <p>5家</p>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default CorporateLibraryDetail;
