import React from 'react'
import { Form, Input, Button, InputNumber, Select } from 'antd';

function Lab3() {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };
    const onFinish1 = (values: any) => {

        console.log("Dữ liệu sản phẩm:", values);
    };
    return (
        <div>
            Bài 1
            <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>


                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Vui lòng nhập email" },
                        { type: "email", message: "Email không hợp lệ" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name="password"
                    rules={[
                        { required: true, message: "Vui lòng nhập pasword" },

                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng Nhập
                    </Button>
                </Form.Item>
            </Form>

            <Form.Item label="Password" name="password">
                <Input.Password />
            </Form.Item>
            Bài 2
            <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                <Form.Item label="Name" name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên" },

                    ]}
                ></Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Vui lòng nhập email" },
                        { type: "email", message: "Email không hợp lệ" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone"
                    rules={[
                        { required: true, message: "Vui lòng nhập pasword" },
                        { type: "number", message: "SĐT không hợp lệ" },
                    ]}
                ></Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Vui lòng nhập password" },
                        { min: 6, message: "Mật khẩu phải ít nhất 6 ký tự" }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="Cpassword"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: "Vui lòng xác nhận mật khẩu" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {

                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu xác nhận không trùng khớp!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng Ký
                    </Button>
                </Form.Item>
            </Form>

            <Form.Item label="Password" name="password">
                <Input.Password />
            </Form.Item>
            Bài 3
            <Form layout="vertical" onFinish={onFinish1} style={{ maxWidth: 400 }}>


                <Form.Item
                    label="Tên sản phẩm"
                    name="product"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm" },

                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Giá" name="price"
                    rules={[
                        { required: true, message: "Vui lòng nhập giá" },
                        { type: "number", message: "Vui lòng nhập giá" },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Số lượng" name="quantity"
                    rules={[
                        { required: true, message: "Vui lòng nhập số lượng" },
                        { type: "number", message: "Vui lòng nhập số lượng" },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Mô tả" name="status"

                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Nhập sản phẩm
                    </Button>
                </Form.Item>
            </Form>
            Bài 4
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Tên sản phẩm" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Danh mục" name="category">
                    <Select
                        placeholder="Chọn danh mục"
                        options={[
                            { label: "Laptop", value: "laptop" },
                            { label: "Điện thoại", value: "phone" },
                            { label: "Tablet", value: "tablet" },
                            { label: "Phụ kiện", value: "accessory" },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Đường dẫn" name="slug">
                    <Input.TextArea rows={4} />
                </Form.Item>
                        <Form.Item label="nội dung" name="content">
                    <Input.TextArea rows={4} />
                </Form.Item>
                        <Form.Item label="ảnh" name="ImageURL">
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Thêm sản phẩm
                </Button>
            </Form>
        </div>
    )
}

export default Lab3
