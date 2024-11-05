import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Introduction from '../../components/Requirement1';
import Api from '../../components/Requirement12';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [index, setIndex] = useState(1);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Gioi thieu ban than',
                            onClick: () => setIndex(1)

                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Linh vuc chuyen mon',
                            onClick: () => setIndex(2)
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Dang xuat',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>

                <Content
                    style={{
                        margin: '30px 20px',
                        padding: '30',

                        minHeight: 300,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {index == 1 ?
                        <Introduction /> : <Api />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;