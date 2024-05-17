import React, { useState } from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { AiOutlineBgColors, AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { SiBrandfolder } from 'react-icons/si';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaBloggerB, FaClipboardList } from 'react-icons/fa6';
import { ImBlog } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate()
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" >
                    <h2 className='text-white fs-5 text-center py-3'>
                        <span className='sm-demo-logo-vertical'>DC</span>
                        <span className='lg-demo-logo-vertical'>Dev Corner</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key === 'signout') {

                        } else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className='fs-4' />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <AiOutlineUser className='fs-4' />,
                            label: 'Customers',
                        },
                        {
                            key: 'catelog',
                            icon: <AiOutlineShoppingCart className='fs-4' />,
                            label: 'Catelog',
                            children: [
                                {
                                    key: 'product',
                                    icon: <AiOutlineShoppingCart className='fs-4' />,
                                    label: 'Add Product',
                                },
                                {
                                    key: 'product-list',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Product List',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Brand',
                                },
                                {
                                    key: 'list-brand',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Brand List',
                                },
                                {
                                    key: 'category',
                                    icon: <BiCategoryAlt className='fs-4' />,
                                    label: 'Category',
                                },
                                {
                                    key: 'list-category',
                                    icon: <BiCategoryAlt className='fs-4' />,
                                    label: 'Catrgory List',
                                },
                                {
                                    key: 'color',
                                    icon: <AiOutlineBgColors className='fs-4' />,
                                    label: 'Color',
                                },
                                {
                                    key: 'list-color',
                                    icon: <AiOutlineBgColors className='fs-4' />,
                                    label: 'Color List',
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <FaClipboardList className='fs-4' />,
                            label: 'Orders',
                        },
                        {
                            key: 'blogs',
                            icon: <FaBloggerB className='fs-4' />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blog',
                                    icon: <FaBloggerB className='fs-4' />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <ImBlog className='fs-4' />,
                                    label: 'Blog List',
                                },
                                {
                                    key: 'blog-category',
                                    icon: <FaBloggerB className='fs-4' />,
                                    label: 'Add Blog Category',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <ImBlog className='fs-4' />,
                                    label: 'Blog Category List',
                                },
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <ImBlog className='fs-4' />,
                            label: 'Enquiries',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className='d-flex justify-content-between ps-3 pe-5'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='d-flex gap-3 align-items-center'>
                        <div className='position-relative'>
                            <IoIosNotifications className='fs-4' />
                            <span className='badge text-bg-danger text-white rounded-circle p-1 position-absolute'>3</span>
                        </div>
                        <div className='d-flex gap-3 align-items-center dropdown' >
                            <div>
                                <img width={50} height={50} src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                            </div>
                            <div role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h5 className='mb-0'>Zamin</h5>
                                <p className='mb-0'>zamin@gmail.com</p>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link to='/' className="dropdown-item" style={{"height":"auto","lineHeight":"20px"}}>View Profile</Link></li>
                                <li><Link to='/' className="dropdown-item" style={{"height":"auto","lineHeight":"20px"}}>Signout</Link></li>
                                {/* <li><Link to='/' className="dropdown-item" style={{"height":"auto","lineHeight":"20px"}}>Something else here</Link></li> */}
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;