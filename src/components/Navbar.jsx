import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectionOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import image from "../images/cryptocurrency.png";

// ant-menu-item-selected
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={image} size="large" />
                <Typography.Title level={2} className="logo">

                    <Link to="/">
                        Cryptoverse
                    </Link>
                    {/* <Button className='menu-control-container'>

                    </Button> */}
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/" >Home</Link>
                </Menu.Item>

                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
             </div>
    )
}

export default Navbar