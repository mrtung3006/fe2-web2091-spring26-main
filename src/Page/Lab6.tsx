import { Form, Input, Button, Spin, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCRUDStory } from "./useCRUDStory";

export default function EditStory() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { update } = useCRUDStory();

  // Vẫn giữ useQuery đơn lẻ để lấy chi tiết 1 bản ghi theo ID
  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const onFinish = (values: any) => {
    if (!id) return;
    
    update.mutate(
      { id, values },
      {
        onSuccess: () => {
          message.success("Cập nhật truyện thành công!");
          navigate("/"); 
        },
      }
    );
  };

  if (isLoading) return <Spin tip="Đang tải dữ liệu..." />;

  return (
    <Form 
      form={form} 
      onFinish={onFinish} 
      layout="vertical"
      style={{ maxWidth: 600 }}
    >
      <Form.Item 
        name="title" 
        label="Tên truyện" 
        rules={[{ required: true, message: "Không được để trống tên" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name="author" 
        label="Tác giả"
        rules={[{ required: true, message: "Nhập tên tác giả" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Link ảnh đại diện">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mô tả chi tiết">
        <Input.TextArea rows={5} />
      </Form.Item>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Button 
          type="primary" 
          htmlType="submit" 
          loading={update.isPending}
        >
          Lưu thay đổi
        </Button>
        <Button onClick={() => navigate("/")}>Hủy bỏ</Button>
      </div>
    </Form>
  );
}