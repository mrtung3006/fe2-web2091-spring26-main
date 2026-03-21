import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button, Form, Input, Layout, Modal, Table } from "antd";
import { useState } from 'react';
import EditStory from "./Page/Lab6";

import { Routes, Route } from "react-router-dom";
import { StoryList } from "./Page/Lab5";
const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
];

const data = [
    { key: 1, name: "Tung", email: "mrtung3006@gmail.com", role: "sv" },
    { key: 2, name: "Anna", email: "abc", role: "sv" },
];
const { Header, Content, Footer } = Layout;
function App() {

    <Table columns={columns} dataSource={data} />;

    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="bg-blue-600 text-white shadow">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="#" className="text-xl font-semibold">
                        <strong>WEB2091 App</strong>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="#" className="hover:text-gray-200">
                            Trang chủ
                        </Link>
                        <Link to="/list" className="hover:text-gray-200">
                            Danh sách
                        </Link>
                        <Link to="/add" className="hover:text-gray-200">
                            Thêm mới
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="#" className="hover:text-gray-200">
                            Đăng nhập
                        </Link>
                        <Link to="#" className="hover:text-gray-200">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
            </div>
            <Button type="primary">Click me</Button>;
            <Button type="primary">Click me</Button>;
            <Layout>
                <Header style={{ color: "white" }}>Header</Header>
                <Content style={{ padding: 20 }}>
                    <Routes>
                        <Route path="/edit/:id" element={<EditStory />}></Route>
                    </Routes>
                    <StoryList />

                </Content>
                <Footer>Footer</Footer>
            </Layout>
            <Toaster />
        </>
    );
}

export default App;
