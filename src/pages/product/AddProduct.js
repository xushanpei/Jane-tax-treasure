import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch,Modal, Form, DatePicker } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";

const { Option } = Select;
const { MonthPicker, RangePicker, TimePicker } = DatePicker;
const FormItem = Form.Item ;
const { TextArea } = Input;


class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
       <div style={{height:"400px",width:"100%",overflow:"auto"}}>
       <Form {...formItemLayout}>
          <FormItem label="产品名称">
            {getFieldDecorator('productName', {
              rules: [{required: true, message: '请输入产品名称'}],
            })(
              <Input placeholder="请输入产品名称"/>
            )}
          </FormItem>
          <FormItem label="产品分类">
            {getFieldDecorator('productName2', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <Select placeholder="请选择产品分类" style={{width:"160px"}}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="产品简介">
            {getFieldDecorator('productName3', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <TextArea placeholder="请输入简介信息"></TextArea>
            )}
          </FormItem>
          <FormItem label="产品价格">
            {getFieldDecorator('productName4', {
              rules: [{required: true, message: '请选择分类'}],
            })(
                <Input placeholder="请输入产品价格"/>
            )}
          </FormItem>
          <FormItem label="实际税率">
            {getFieldDecorator('productName5', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <span>
                   <Input placeholder="请输入" style={{width:"120px"}}/> &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            )},
            {getFieldDecorator('productName100', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <span>
                   <Input placeholder="请输入" style={{width:"120px"}}/>
              </span>
            )}
          </FormItem>
          <FormItem label="服务时长">
            {getFieldDecorator('productName6', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <Input placeholder="请输入服务时长"/>
            )}
          </FormItem>
          <FormItem label="赠送时长">
            {getFieldDecorator('productName7', {
              rules: [{required: true, message: '请选择分类'}],
            })(
                <Input placeholder="请输入赠送时长"/>
            )}
          </FormItem>
          <FormItem label="增值税返还">
            {getFieldDecorator('productName8', {
              rules: [{required: true, message: '请选择分类'}],
            })(
                <Input placeholder="请输入增值税返还"/>
            )}
          </FormItem>
          <FormItem label="纳税人类型">
            {getFieldDecorator('productName9', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <Select placeholder="请选择纳税人类型">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="开票额度">
            {getFieldDecorator('productName10', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <Select placeholder="请选择开票额度" style={{width:"160px"}}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
              </Select>
            )}
          </FormItem>
        </Form>
      
       </div>
       </Modal>
    );
  }
}

const AddProductModal = Form.create()(AddProduct);

export default AddProductModal;
