import React,{useState}from 'react';
import {Layout, Menu} from "antd";
import  {Image} from "antd";
import '../css/TopMenu.css'
import Logo from '../assets/logo.png'
// import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Button, Drawer } from 'antd';
import {
    AutoComplete,
    Cascader,
    Checkbox,
    Col,
    Form,
    InputNumber,
    Row,
    Select,
} from 'antd';
const { Search } = Input;
const { Header, Content, Footer } = Layout;
class TopMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            visible:false,
        }
    }

    componentDidMount(){

    }
    render() {
        const { Option } = Select;
        const showDrawer = () => {
            this.setState({
                visible:true,
            }

        )
        };

        const onClose = () => {
            this.setState({
                visible:false,
            })
        };
        const onClick= (e)=>{
            if(e.key=='login')
            {
                showDrawer();
            }
            console.log(e.key);
        }



        function onSearch(){
            return true;
        }

        const items=[
            {
                label: '首页',
                key: 'backToHome',
            },
            {
                label:'订单详情',
                key: 'order',
            },
            {
                label: '个人信息',
                key: 'userinfo',
            },
            {
                label:'登录/注册',
                key: 'login',
            },


        ];
        // const Onclick=this.Onclick.bind(this)
        return (<Header>
                    <div className="logo" >
                        <Image width={50} alt={'logo'} src={Logo}/>
                    </div>
                    <div className="SearchLine">
                        <Search placeholder="Search which book you want" onSearch={onSearch} enterButton />
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        onClick={onClick}
                    />
                <Drawer title="登录/注册" placement="right" onClose={onClose} visible={this.state.visible}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                </Header>
        );
    }
}
export default TopMenu;