import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch,Modal, Form, DatePicker,Radio } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";

const { Option } = Select;
const { MonthPicker, RangePicker, TimePicker } = DatePicker;
const FormItem = Form.Item ;
const { TextArea } = Input;


class EditCustomerServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 1,
    };
  }

  onOk = () => {
    this.props.form.validateFields((err, values) => {
      if (err) return;//检查Form表单填写的数据是否满足rules的要求
      this.props.onOk(values);//调用父组件给的onOk方法并传入Form的参数。
      this.props.form.resetFields();//重置Form表单的内容
    })
  };
  onCancel = () => {
    this.props.form.resetFields();//重置Form表单的内容
    this.props.onCancel()//调用父组件给的方法
  };

 

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    let { title, visible, onOk, onCancel } = this.props;
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

    return (
        <Modal
        wrapClassName="divModal"
        title={title}
        visible={visible}
        onOk={this.onOk}
        onCancel={onCancel}
      >

       <Form {...formItemLayout}>
          <FormItem label="客服姓名">
            {getFieldDecorator('productName', {
              rules: [{required: true, message: '请输入分类名称'}],
            })(
              <Input placeholder="请输入分类名称"/>
            )}
          </FormItem>
          <FormItem label="登录账号">
            {getFieldDecorator('productName2', {
              rules: [{required: true, message: '请输入分类排序'}],
            })(
                <Input placeholder="请输入分类排序"/>
            )}
          </FormItem>
          <FormItem label="部门">
            {getFieldDecorator('productName4', {
              rules: [{required: true, message: '请输入分类排序'}],
            })(
                <Input.Password  placeholder="请输入分类排序"/>
            )}
          </FormItem>
          <FormItem label="状态">
            {getFieldDecorator('productName3', {initialValue:1,
              rules: [{required: true, message: '请输入分类简介'}],
            })(
                <Select placeholder="请选择产品分类" style={{width:"160px"}}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
              </Select>
            )}
          </FormItem>
          </Form>
          
      
       </Modal>
    );
  }
}

const EditCustomerService = Form.create()(EditCustomerServices);

export default EditCustomerService;
