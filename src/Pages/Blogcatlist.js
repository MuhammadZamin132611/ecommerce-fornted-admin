import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getbCategory } from '../features/bcategory/bcategorySlice';
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
        title: 'Action',
        dataIndex: 'action',
    },
];

const Blogcatlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getbCategory())
    }, []);
    const bCatState = useSelector((state) => state.bcategory.bcategory);
    const data1 = [];
    for (let i = 0; i < bCatState.length; i++) {
        data1.push({
            key: i + 1,
            name: bCatState[i].title,
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
            <h3 className="mb-4 title">Blog Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
}

export default Blogcatlist;
