import { Form, Input, Button, Checkbox } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";


const CategoriesForm = () => {
  

  
  const categories = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post(" http://localhost:3000/categories", data);

      return res.data;
    },

    onSuccess: () => {
      toast.success("Thêm danh mục truyện thành công");
    },

    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });
  const onFinish = (values: any) => {
    const payload = {
      ...values,
      isActive: !!values.isActive,
    };
    categories.mutate(payload);
  };
  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 } } initialValues={{ isActive: true }}>
      <Form.Item
        label="Tên danh mục"
        name="title"
        rules={[{ required: true, message: "Nhập tên danh mục" }]}
      >
        <Input />
      </Form.Item>
        <Form.Item 
        name="isActive" 
        valuePropName="checked" 
      >
        <Checkbox>Hiển thị danh mục (Active)</Checkbox>
      </Form.Item>
      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>


      <Button type="primary" htmlType="submit" loading={categories.isPending}>
        Thêm danh mục
      </Button>
    </Form>
    
  );
};

export default CategoriesForm;