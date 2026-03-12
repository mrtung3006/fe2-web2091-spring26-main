import React from 'react'
import { Table, Button } from 'antd' 
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
const columns1 = [
    { title: "ID", dataIndex: "id" },
    { title: "ProductName", dataIndex: "product", 
        
    },
    { title: "Price", dataIndex: "price", render: (status) => (
      <span style={{ color: status === "instock" ? "green" : "red" }}>
        {status}
      </span>
    ),
        
    },
    
    { title: "Category", dataIndex: "category" },
];

const data1 = [
    { key: 1,id: 1, product: "tivi", price: 18000000, category:"abc" },
    { key: 2,id: 2, product: "máy tính", price: 19000000, category:"xyz" },
    { key: 3,id: 3, product: "tủ lạnh", price: 19000000, category:"abc" },
    { key: 4,id: 4, product: "điện thoại", price: 19000000, category:"abc" },
    { key: 5,id: 5, product: "tủ lạnh", price: 19000000, category:"Design" },


];
const columns2 = [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <span style={{ color: status === "active" ? "green" : "red" }}>
        {status}
      </span>
    ),
  },
  {
    title: "Action",

    render: (_, record) => (
      <>
        <button >Edit</button>
        <button >Delete</button>
      </>
    ),
  },
];

const data2 = [
  { key: 1, id: 1, name: "John", email: "john@example.com", status: "active" },
  { key: 2, id: 2, name: "Anna", email: "anna@example.com", status: "inactive" },
];
function Lab2() {
  return (
    <div>
      <Table columns={columns} dataSource={data}/>
        <Table columns={columns1} dataSource={data1} pagination={{ pageSize: 3 }}/>
        <Table columns={columns2} dataSource={data2}/>
    </div>
  )
}

export default Lab2
