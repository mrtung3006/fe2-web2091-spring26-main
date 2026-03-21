import { Form, Input, Button, Spin,message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function EditStory() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return axios.put(`http://localhost:3000/stories/${id}`, values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });

      navigate("/");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
    message.success("Cập nhật thành công");
  };

  if (isLoading) return <Spin />;

  return (
    <Form onFinish={onFinish} form={form} layout="vertical">
      <Form.Item name="title" label="Tên truyện" 
      rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="author" label="Tác giả"
      rules={[{ required: true, message: "Nhập tên tác giả" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Ảnh">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mô tả">
        <Input.TextArea />
      </Form.Item>
      <Button htmlType="submit" loading={mutation.isPending}>Submit</Button>
    </Form>
  );
}