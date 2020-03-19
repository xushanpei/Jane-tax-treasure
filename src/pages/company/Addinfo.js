import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch,Modal, Form, DatePicker } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";
import { compose } from "redux";
import moment from "moment"

const { Option } = Select;
const { MonthPicker, RangePicker, TimePicker } = DatePicker;
const FormItem = Form.Item ;
const { TextArea } = Input;


class Addinfos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  onOk = () => {
    this.props.form.validateFields((err, values) => {
        console.log("数据",values)
      if (err) return;//检查Form表单填写的数据是否满足rules的要求
      this.props.onOk(values);//调用父组件给的onOk方法并传入Form的参数。
      this.props.form.resetFields();//重置Form表单的内容
    })
  };
  onCancel = () => {
    this.props.form.resetFields();//重置Form表单的内容
    this.props.onCancel()//调用父组件给的方法
  };

//   disabledDate = (current) => {
//     return current < moment(new Date('2018/07/15')) || current > moment().endOf('day')
//   }

  render() {
    let { title, visible, onOk, onCancel, baseInfo , type, htype} = this.props;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
//       console.log("基本信息,", baseInfo)
   console.log("接收到的公司类型", type)
   console.log("接收到的行业类型", htype)
   


    return (
        <Modal
        wrapClassName="divModals"
        title={title}
        visible={visible}
        onOk={this.onOk}
        onCancel={onCancel}
      >
       
       <Form {...formItemLayout}>
       <FormItem label="归属人">
            {getFieldDecorator('belong', {
                // initialValue:baseInfo.companyType,
              rules: [{required: true, message: '请选择归属人'}],
            })(
                <Select>
                    {
                        type? type.map((item,key)=>{
                        return <Option key={key} value={item.id}>{item.name}</Option>
                        }) : ""
                    }
                </Select>
            )}
          </FormItem>
          <FormItem label="联系人">
            {getFieldDecorator('contact', {
                // initialValue:baseInfo.quota,
              rules: [{required: true, message: '请输入联系人'}],
            })(
                <Input placeholder={"请输入联系人"} ></Input>
            )}
          </FormItem>
          <FormItem label="推荐人">
            {getFieldDecorator('recommender', {
                // initialValue:baseInfo.registeredCapital,
              rules: [{required: true, message: '请输入推荐人'}],
            })(
                <Input placeholder={"请输入注册资本"} ></Input>
            )}
          </FormItem>
          <FormItem label="转换人">
            {getFieldDecorator('transform', {
                // initialValue:baseInfo.industryName,
              rules: [{required: true, message: '请输入转换人'}],
            })(
                <Input placeholder={"请输入转换人"} ></Input>
            )}
          </FormItem>
         

        </Form>

       </Modal>
    );
  }
}

const Addinfo = Form.create()(Addinfos);

export default Addinfo;
