import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getColors } from '../features/color/colorSlice';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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

const Colorlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getColors());
    }, [])
    const colorState = useSelector((state) => state.color.colors)
    const data1 = [];
    for (let i = 1; i < colorState.length; i++) {
        data1.push({
            key: i,
            name: colorState[i].title,
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
            <h3 className="mb-4 title">Colors</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
}

export default Colorlist;
