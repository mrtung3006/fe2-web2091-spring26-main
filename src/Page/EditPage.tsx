import { Button, Form, Input, Select } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function EditPage() {
  const {id}= useParams()
  const[form]= Form.useForm()
  const navigate= useNavigate()
  const queryClient= useQueryClient()
  const{data}=useQuery({
    queryKey:["movies","id"],
    queryFn:async()=>{
      const res = await axios.get(`http://localhost:3000/movies/${id}`,)
      return res.data
    }
  })
  useEffect(()=>{
    if (data) {
      form.setFieldsValue(data)
    }
  },[data])
  const mutation= useMutation({
    mutationFn:async(value:any)=>{
      return await axios.put(`http://localhost:3000/movies/${id}`,value)

    },
    onSuccess:()=> {
      queryClient . invalidateQueries({queryKey:["movies"]})
      navigate("/")
    },
    
  })
  const onFinish = (value:any)=>{
    mutation.mutate(value)
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">sửa</h1>

      <Form layout="vertical" onFinish={onFinish} form={form} style={{ maxWidth: 500 }}>
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditPage;