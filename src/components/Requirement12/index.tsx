import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Linh vuc chuyen mon',
        dataIndex: 'tenmonhoc',
        key: 'tenmonhoc',
    },
    {
        title: 'Tu viet tat',
        dataIndex: 'abbreation',
        key: 'abbreation',
    },

    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];

const Api = () => {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        fetch('https://internship-api.dev.altasoftware.vn/api/subject')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default Api;