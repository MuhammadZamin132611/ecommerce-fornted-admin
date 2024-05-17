import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice';
const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length
    },
    {
        title: 'Category',
        dataIndex: 'product',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const Bloglist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    }, []);
    const blogState = useSelector((state) => state.blogs.blogs)
    const data1 = [];
    for (let i = 0; i < blogState.length; i++) {
        data1.push({
            key: i+1,
            name: blogState[i].title,
            product: blogState[i].category,
            action:
                (
                    <>
                        <Link ><BiEdit className='fs-5 text-primary' /></Link>
                        <Link ><AiFillDelete className='ms-3 fs-5 text-danger' /></Link>
                    </>
                ),
        });
    }
    return (
        <div>
            <h3 className="mb-4 title">Blogs List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
}

export default Bloglist;
