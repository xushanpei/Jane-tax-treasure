import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Breadcrumb, Select, Input, Button, Switch, Modal, Form, DatePicker,message, Upload, Icon } from "antd";
import "./index.scss";
import BreadeHeader from "../../components/breadeHeader/BreadeHeader";

const { Option } = Select;
const { MonthPicker, RangePicker, TimePicker } = DatePicker;
const FormItem = Form.Item;
const { TextArea } = Input;


class OpenBills extends Component {
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
        let { title, visible, onOk, onCancel,data } = this.props;
        const { getFieldDecorator } = this.props.form;
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

        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
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
                    <FormItem label="发票代码">
                        {getFieldDecorator('productName', {
                            rules: [{ required: true, message: '请输入发票代码' }],
                        })(
                            <Input placeholder="请输入发票代码" />
                        )}
                    </FormItem>
                    <FormItem label="发票号码">
                        {getFieldDecorator('productName0', {
                            rules: [{ required: true, message: '请输入发票号码' }],
                        })(
                            <Input placeholder="请输入发票号码" />
                        )}
                    </FormItem>
                    <FormItem label="开票日期">
                        {getFieldDecorator('productName2', {
                            rules: [{ required: true, message: '请选择开票日期' }],
                        })(
                            <DatePicker placeholder="请选择开票日期" />
                        )}
                    </FormItem>
                    <FormItem label="名称">
                        {getFieldDecorator('productName3', {
                            initialValue: '舜贝佳信息科技有限公司',
                            rules: [{ required: true, message: '请选择开票日期' }],
                        })(
                            <Input disabled />
                        )}
                    </FormItem>
                    <FormItem label="纳税人识别号">
                        {getFieldDecorator('productName4', {
                            initialValue: '954674143mr5465',
                            rules: [{ required: true, message: '请输入分类简介' }],
                        })(
                            <Input disabled />
                        )}
                    </FormItem>
                    <FormItem label="开户行及账号">
                        {getFieldDecorator('productName5', {
                            initialValue: '南京银行玄武支行 6222 6662 1000 3188 326',
                            rules: [{ required: true, message: '请输入分类简介' }],
                        })(
                            <TextArea disabled />
                        )}
                    </FormItem>
                    <FormItem label="地址电话">
                        {getFieldDecorator('productName6', {
                            initialValue: '南京市雨花台区世茂52 025-86222697',
                            rules: [{ required: true, message: '请输入分类简介' }],
                        })(
                            <TextArea disabled />
                        )}
                    </FormItem>
                    <FormItem label="发票图片">
                        {getFieldDecorator('productName7', {
                            rules: [{ required: true, message: '请上传发票图片' }],
                        })(
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload" /> 上传图片
                                </Button>
                            </Upload>
                        )}
                    </FormItem>
                </Form>

            </Modal>
        );
    }
}

const OpenBill = Form.create()(OpenBills);

export default OpenBill;
