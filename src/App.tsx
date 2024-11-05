import React, { useEffect, useState } from 'react';
import { Button, Input, Table } from "antd";
import logo from './logo.svg';
import './App.css';
import { table } from 'console';
import Demo1104 from './components/demo1104'

function App() {
  // let myArr: any[] = [{ id: 0, color: 'red' }, { id: 1, color: 'green' }, { id: 2, color: 'blue' }]
  // console.log(myArr);
  // const [universities, setUniversities] = useState<any[]>([]);
  // useEffect(() => {
  //   fetch('https://internship-api.dev.altasoftware.vn/api/University', {
  //     method: 'GET'
  //   })
  //     .then(response => response.json())
  //     .then((data: any) => {
  //       console.log(data);
  //       setUniversities(data);
  //     })
  // }, [])


  return (

    <div >

<Demo1104/>
      {/* <table>
        <tr><td>STT</td><td>Tên trường</td></tr>
        {universities.filter(x => x.tentruong.includes('HCM')).map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td><td>{item.tentruong}</td>
            </tr>
          )
        })}
        {universities.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.tentruong}</td>
              <td>{item.diachi}</td>
            </tr>
          ))}

      </table> */}


    </div>
  );
}

export default App;