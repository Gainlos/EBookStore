import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';
import '../css/LayoutComponent.css'
const { Header, Content, Footer } = Layout;

class LayoutComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(15).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `nav ${key}`,
                            };
                        })}
                    />
                </Header>
                <Content>
                    <div className="site-layout-content">Content</div>
                </Content>
                <Footer>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}





export default LayoutComponent;