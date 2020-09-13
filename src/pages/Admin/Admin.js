import React, {Component} from 'react';
import './admin.less'
import LeftNav from '../LeftNav/LeftNav'
import {Layout} from "antd";
const { Header, Footer, Sider, Content } = Layout;
class Admin extends Component {
    render() {
        return (
                <Layout className='layout-contanier'>
                    <Sider >
                        <LeftNav></LeftNav>
                    </Sider>
                    <Layout>
                        <Header className='layout-content-heard'>Header</Header>
                        <Content className='layout-content-content'>Content</Content>
                        <Footer className='layout-content-footer'>推荐使用谷歌浏览器</Footer>
                    </Layout>
                </Layout>
        );
    }
}

export default Admin;