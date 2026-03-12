import React from 'react'
import { Table } from 'antd' 
const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
];

const data = [
    { key: 1,id: 1, name: "Nam", age: 18, major:"IT" },
    { key: 2,id: 2, name: "Linh", age: 19, major:"Business" },
    { key: 3,id: 3, name: "Hà", age: 19, major:"Design" },
];
function Lab2() {
  return (
    <div>
      <Table columns={columns} dataSource={data}/>
    </div>
  )
}

export default Lab2
