import React, {Component} from 'react';
import { Layout } from 'antd';
import './App.less'
import './reset.less'
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
    render() {
        return (
            <Layout className='layout-contanier'>
                <Sider >Sider</Sider>
                <Layout>
                    <Header className='layout-content-heard'>Header</Header>
                    <Content className='layout-content-content'>Content</Content>
                    <Footer className='layout-content-footer'>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
