import React from 'react';
import { Column } from '@ant-design/plots';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';

import { Table } from 'antd';
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
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 1; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const data = [
    { type: 'Jan', value: 16 },
    { type: 'Feb', value: 25 },
    { type: 'Mar', value: 24 },
    { type: 'Apr', value: 19 },
    { type: 'May', value: 22 },
    { type: 'Jun', value: 5 },
    { type: 'Jul', value: 10 },
    { type: 'Aug', value: 15 },
    { type: 'Sep', value: 15 },
    { type: 'Oct', value: 25 },
    { type: 'Nov', value: 35 },
    { type: 'Dec', value: 15 },
];
const Dashboard = () => {
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        style: {
            fill: ({ type }) => {
                return '#ffd333';
            },
        },
        label: {
            text: (originData) => {
                const val = parseFloat(originData.value);
                if (val < 0.05) {
                    return (val * 100).toFixed(1) + '%';
                }
                return '';
            },
            offset: 10,
        },
        legend: false,
        mate:{
            type:{
                alise:'Month'
            },
            sales:{
                alies:'Income'
            }
        }
    };
    return (
        <div>
            <h3 className='mb-4 title'>Dashboard</h3>
            <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white shadow p-3 rounded-3'>
                    <div>
                        <p className='desc'>Total</p>
                        <h2 className='mb-0 sub-title'>$100</h2>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'><BsArrowDownRight /> 32%</h6>
                        <p className='mb-0 desc'>Compared to April 2022</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white shadow p-3 rounded-3'>
                    <div>
                        <p className='desc'>Total</p>
                        <h2 className='mb-0 sub-title'>$100</h2>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='red'><BsArrowDownRight /> 32%</h6>
                        <p className='mb-0 desc'>Compared to April 2022</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white shadow p-3 rounded-3'>
                    <div>
                        <p className='desc'>Total</p>
                        <h2 className='mb-0 sub-title'>$100</h2>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'><BsArrowDownRight /> 32%</h6>
                        <p className='mb-0 desc'>Compared to April 2022</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="mt-4 sub-title">Income Statics</h3>
                <div>
                    <Column {...config} />
                </div>
            </div>
            <div className="mt-4">
                <h3 className="mb-4 sub-title">
                    Recent Orders
                </h3>
                <div><Table columns={columns} dataSource={data1} /></div>
            </div>
            
        </div>
    );
}

export default Dashboard;
