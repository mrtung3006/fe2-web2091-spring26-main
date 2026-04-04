import { Form, Input, Button } from "antd";
import { useCRUDStory } from "./useCRUDStory";

const StoryForm = () => {
  const [form] = Form.useForm();
  const { add } = useCRUDStory();

  const onFinish = (values: any) => {
    add.mutate(values, {
      onSuccess: () => {
        form.resetFields(); 
      },
    });
  };
  
  return (
    <Form 
      form={form}
      layout="vertical" 
      onFinish={onFinish} 
      style={{ maxWidth: 500 }}
    >
      <Form.Item
        label="Tên truyện"
        name="title"
        rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input placeholder="Nhập tên truyện..." />
      </Form.Item>

      <Form.Item label="Tác giả" name="author">
        <Input placeholder="Tên tác giả" />
      </Form.Item>

      <Form.Item label="Image URL" name="image">
        <Input placeholder="http://..." />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={add.isPending}>
        Thêm truyện
      </Button>
    </Form>
  );
};

export default StoryForm;