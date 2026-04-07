import { Button, Form, Input, Select } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
function AddPage() {
const mutation= useMutation({
    mutationFn:async(data:any)=>{
      const res = await axios.post(`http://localhost:3000/movies`,data)
      return res.data
    },
    onSuccess:()=> {
      toast.success("thêm thành công")
    },
    onError:()=> {
      toast.error("lỗi")
    },
  })
  const onFinish = (value:any)=>{
    mutation.mutate(value)
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
        {/* Text input */}
        <Form.Item label="tên Phim" name="title">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>

        <Form.Item label="tên đạo diễn" name="director">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>

        <Form.Item label="năm phát hành" name="year">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>

        {/* Submit button */}
        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddPage;
