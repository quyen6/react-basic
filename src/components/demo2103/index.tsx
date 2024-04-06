import React, { useState } from "react";
import { Table, Tag, Button,TableProps } from "antd"; // Assuming you're using Ant Design Table
import { isEditable } from "@testing-library/user-event/dist/utils";

const Demo2103 = () => {
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        isEditable: boolean;
        
      }
      const data: DataType[] = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'American',
          isEditable: true,
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'New York',
          isEditable: false,
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Thailand',
          isEditable: false,
        },
      ];
      
    const columns: TableProps<DataType>['columns'] = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (text, record, index) => {
              return record.isEditable ?(
               <input value={record.address}
               onChange={(e)=>{
                const updateData = searchData.map((item)=>{
                    if (item.key === record.key){
                        return{...item, address: e.target.value};
                    }
                    return item;
                });
                setSearchData(updateData);
               }}
               onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const updatedData = searchData.map((item) => {
                    if (item.key === record.key) {
                      return { ...item, isEditable: false };
                    }
                    return item;
                  });
                  setSearchData(updatedData);
                }
              }}
             /> ) : ( <a onClick={()=> alert(record.address)}>{record.address}</a>)
            }
          },
          {
            title: 'Action',
            dataIndex: 'action',
            key: 'key',
            render: (key, record, index) => {
              return (
                <Button type='primary' onClick={() => {
                  setSearchData(data.filter(x => x.name !== record.name));
                }}>
                  Delete
                </Button>
              );
            }
          }
        ];
      
    const [searchData, setSearchData] = useState(data)
    return (
        <div>
            <select onChange={(e) => {
                setSearchData(data.filter(x => x.age < Number(e.currentTarget.value)))

            }}>
                
                <option value="35">Under age 35</option>
                <option value="50">Under age 50</option>
            </select>
            <Table dataSource={searchData} columns={columns} />
            <button onClick={() => {
                localStorage.clear();
                window.location.reload();
            }}>Logout</button></div>
    );
};



export default Demo2103;
