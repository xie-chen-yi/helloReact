import React, {Component} from 'react';
import login from '../../assets/images/logo.png'
import './login.less'
import {Form, Input, Button,message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

class Index extends Component {
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.from.validateFields(async (err, values) => {
            // 校验成功
            if (!err) {
                // const {username, passward} = values;
                const result = ''//await reqLogin(username, passward)
                if (result.status === 0) {
                    message.success('登录成功')
                    // 保存user
                    // const user = result.data;

                }
            } else {
                message.error('校验失败')
            }
        });
    }
    validatePwd = (rule, value, callback) => {
        try {
            if (!value) {
                callback('密码必须输入');
            } else if (value.length < 4) {
                callback('密码长度不能小于4位');
            } else if (value.leading > 12) {
                callback('密码长度不能大于12位');
            } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                callback('密码必须是英文、数字或下划线组成');
            } else {
                callback()
            }
        } catch (err) {
            callback(err)
        }
    }

    render() {
        return (
            <div className='login'>
                <div className='heard'>
                    <img src={login} alt=""/>
                    <h2>React项目: 后台管理系统</h2>
                </div>
                <section className='login-content'>
                    <h2>用户登陆</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{username: 'admin', password: '12345465'}}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: '请输入用户名'}, {min: 4, message: '至少输入4个字母'}, {
                                max: 8,
                                message: '至多输入8个字母'
                            }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{validator: this.validatePwd}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

export default Index;