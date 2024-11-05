import React from "react";
const Demo1403 = () =>{
    const data = [{id:1, name:'Banana', origin:'VietNam'}, {id:2, name:'Orange', origin: 'VietNam'},

    {id:3, name:'Cherry', origin:'Chile'}, {id:4, name:'Kiwi', origin:'Austraylia'}];
    
    let myValue = data.findIndex(x=>x.id==4);
    console.log(data[myValue].origin);
}
export default Demo1403;