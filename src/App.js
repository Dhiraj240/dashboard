import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Layout, Input, Menu, Icon, Avatar, Typography, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { SearchOutlined } from '@ant-design/icons';

import {
  SettingFilled,
  NotificationFilled,
} from '@ant-design/icons';

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

let mountNode = document.getElementById('root');



function App() {
  return (
    
    <div className="App">
           
      <Layout>
        <Sider style={{ background: 'gray' }}>
          <Avatar style={{ float: 'left' }} src='./vy.png' />
          <Title level={3} style={{ float: 'center' }} > VYORIUS </Title>
          <Avatar size={64} icon={<UserOutlined />} />
          
        </Sider>
        <Layout>
          <Header style={{ background: 'yellow' }}>
            
            <Title level={4} style={{ float: 'left' }}> MAINTENANCE SUMMARY </Title>
            <div className="icons-list" style={{ fontSize: '25px', float: 'right' }} >
              <Button icon={<SearchOutlined />} size={'large'}>Search</Button>{'   '}

            
              <NotificationFilled /> {'   '}

              <SettingFilled />
              
            </div>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
  
}


export default App;
