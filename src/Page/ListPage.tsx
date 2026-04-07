import { Table, Image, Button, Popconfirm} from "antd";
import { useQuery,useMutation, useQueryClient, Mutation } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
function ListPage() {
  const{data}=useQuery({
    queryKey:['movies'],
    queryFn:async()=>{
      const res= await axios.get("http://localhost:3000/movies")
      return res.data
    }
  })
  const qc=useQueryClient()
  const {mutate}=useMutation({
    mutationFn:async(id:number)=>
      await axios.delete(`http://localhost:3000/movies/${id}`),
    onSuccess:()=>{
      qc.invalidateQueries({ queryKey: ["movies"] });
    }
  })

  const columns=[
    {
      title:"id",
      dataIndex: "id"
    },
    {
      title:"tên phim",
      dataIndex: "title"
    },
    {
      title:"đạo diễn",
      dataIndex: "director"
    },
    {
      title:"năm phát hành",
      dataIndex: "year"
    },
    {
       title: "Action",
      render:(_:any,record:any)=>(
        <>
        <Popconfirm 
        title="deleteMovies"
        description="chắc chắn?"
        okText="yes"
        cancelText="no"
        onConfirm={()=>{()=>mutate(record.id)}}
        >
          <button>xoá</button>
        </Popconfirm>
        <Link to={`/edit/${record.id}`}>
        <button>sửa</button>
        </Link>
        </>
      )
    },
  ]
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default ListPage;
