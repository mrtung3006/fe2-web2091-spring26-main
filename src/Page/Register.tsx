import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

const Register = () => {
  const { setUser } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post("http://localhost:3000/register", values);
    },
    onSuccess: ({ data }) => {

      setUser({
        user: data.user,
        token: data.accessToken,
      });
      message.success("Đăng ký và đăng nhập thành công!");
    },
    onError: () => {
      message.error("Đăng ký thất bại!");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: "50px auto" }}>
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isPending} block>
        Đăng ký
      </Button>
    </Form>
  );
};

export default Register;