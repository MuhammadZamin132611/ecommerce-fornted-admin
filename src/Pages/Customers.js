import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'antd';
import { getUsers } from '../features/customers/customerSlice';
const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.name.length - b.name.length
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
    },
];

const Customers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    const customerState = useSelector((state) => state.customer.customers);
    const data = [];
    for (let i = 1; i < customerState.length; i++) {
        if (customerState[i].role !== "admin") {
            data.push({
                key: i,
                name: customerState[i].firstname + " " + customerState[i].lstname,
                email: customerState[i].email,
                mobile: customerState[i].mobile,
            });
        }
    }
    return (
        <div>
            <h3 className="mb-4 title">Customers</h3>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
}

export default Customers;
