import React from "react";
import './style.css';
const Introduction = () => {

    return (

        <div>
            <h1 className="header">THÔNG TIN CÁ NHÂN</h1><hr />
            <div className="myImage">
                <img src="avartar.jpg" alt="Thái Thị Mỹ Quyên" />
            </div>
            <div className="myInfo">
                <h2>Thái Thị Mỹ Quyên</h2>
                <p>Mã số sinh viên: 2151150056</p>
                <p>Trường: Đại học giao thông vận tải TPHCM</p>
                <p>Khoa: Công nghệ thông tin</p>
                <p>Chuyên ngành: Mạng máy tính và truyền thông dữ liệu</p>
            </div>
        </div>
    );

}
export default Introduction;
