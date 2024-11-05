import React, { useState } from "react";
import { Button, Input, Table } from "antd";
import Title, { title } from "process";
const Test1 = () => {
    const [searchText, setSearchText] = useState('');
    const columns = [{ title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Student Code', dataIndex: 'studentCode', key: 'studentCode' },
    { title: 'Student Name', dataIndex: 'studentName', key: 'studentName' },
    { title: 'Final Test', dataIndex: 'result', key: 'result' },
    { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' }
    ]
    const data = [
        { id: 1, studentCode: '0909001', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM' },
        { id: 2, studentCode: '0909003', studentName: 'Trần Minh Tâm', result: 7.5, hometown: 'Bình Định' },
        { id: 3, studentCode: '0909002', studentName: 'Lý Uyển Nhi', result: 6, hometown: 'Cà Mau' },
        { id: 4, studentCode: '0909004', studentName: 'Trịnh Thị Thu Thảo', result: 6, hometown: 'TPHCM' },
        { id: 5, studentCode: '0909005', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM' },
    ]
    const myProvinces = ['TPHCM', 'Đồng Nai'];
    const [searchData, setSearchData] = useState(data);
    const [searchProvince, setSearchProvince ] =useState<string[]>([]);
    return (

        <div>
            <div style={{ display: 'inline'}}>
                Find student by name: <Input type="text" style={{width:'20%'}} value={searchText} onChange={(e) => {
                    setSearchData(data.filter(x => x.studentName.toLowerCase().includes(e.currentTarget.value)))
                    setSearchText(e.currentTarget.value)
                }}
                    onKeyPress={(e) => {
                        if (e.key == "Enter") {
                            setSearchData(data.filter(x => x.studentName.toLowerCase().includes(searchText.toLowerCase().trim())))
                        }
                    }}
                />&nbsp;
                <input type="checkbox" onChange={(e)=>{
                    if(e.currentTarget.checked){
                        setSearchProvince([...searchProvince, 'TPHCM']);
                    }
                    else{
                        setSearchProvince(searchProvince.filter((province) => province !== 'TPHCM'));
                    }
                }}/>&nbsp;TPHCM&nbsp;
                <input type="checkbox" onChange={(e)=>{
                    if(e.currentTarget.checked){
                        setSearchProvince([...searchProvince, 'Cà Mau']);
                    }
                    else{
                        setSearchProvince(searchProvince.filter((province) => province !== 'Cà Mau'));
                    }
                }}/>&nbsp;Cà Mau&nbsp; 
                <input type="checkbox" onChange={(e)=>{
                    if(e.currentTarget.checked){
                        // Thêm Bình Định vào mảng myProvinces
                        setSearchProvince([...searchProvince, 'Bình Định']);
                    }
                    else{
                        // Xóa Bình Định vào mảng myProvinces
                        setSearchProvince(searchProvince.filter((province) => province !== 'Bình Định'));
                    }
                }}/>&nbsp;Bình Định&nbsp;
                <Button type="primary" onClick={()=>{
                    setSearchData(data.filter(x => searchProvince.includes(x.hometown)))

                    // cập nhật dữ liệu của mảng. b1: tìm index của phần tử muốn cập nhật, 
                    // let index:any = data.findIndex(a=>a.id==2)
                    // if(index!=-1)
                    //     data[index].result = 9;
                    // let previous = data.slice(0,index);
                    // let nexts = data.slice(index+1);
                    // setSearchData([...previous,data[index],...nexts])
                }}>Lọc dữ liệu</Button>
            </div>

            <Table columns={columns}
                dataSource={searchData} />
                <button onClick={() => {
                localStorage.clear();
                window.location.reload();
            }}>Logout</button>
            
                </div>
                
    )
    
}
export default Test1;