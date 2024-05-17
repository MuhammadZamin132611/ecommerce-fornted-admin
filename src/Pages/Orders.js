import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getOrders } from '../features/auth/authSlice';
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
    },
    {
        title: 'Product',
        dataIndex: 'product',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const Orders = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders());
    }, []);
    const orderState = useSelector((state) => state.auth.orders);
    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].orderby.firstname + " " + orderState[i].orderby.lstname,
            product: orderState[i].products.map((productItem, j) => {
                return <ul key={j} className='mb-0'>
                    <li>{productItem.product.title}</li>
                </ul>

            }),
            amount: orderState[i].paymentIntent.amount,
            date: new Date(orderState[i].createdAt).toLocaleString(),
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
            <h3 className="mb-4 title">Orders</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
}

export default Orders;
