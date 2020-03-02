 import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch,Modal, Form, DatePicker } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";

const { Option } = Select;
const { MonthPicker, RangePicker, TimePicker } = DatePicker;
const FormItem = Form.Item ;
const { TextArea } = Input;
const { confirm } = Modal;


class EditProduct extends Component {
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
          <FormItem label="销量">
            {getFieldDecorator('productName3', {
              rules: [{required: true, message: '请选择分类'}],
            })(
              <Input placeholder="请输入销量"></Input>
            )}
          </FormItem>
          <FormItem label="状态">
            {getFieldDecorator('productName4', {
              rules: [{required: true, message: '请选择分类'}],
            })(
                <Select placeholder="请选择产品状态" style={{width:"160px"}}>
                <Option value="1">上架</Option>
                <Option value="2">下架</Option>
            </Select>
            )}
          </FormItem>
         </Form>
       </Modal>
    );
  }
}

const EditProductModal = Form.create()(EditProduct);

export default EditProductModal;
;
