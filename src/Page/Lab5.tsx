import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import {Link} from "react-router-dom"
import axios from "axios";

import { useCRUDStory } from './useCRUDStory';
export function StoryList() {
  const { list, remove } = useCRUDStory();
  const columns = [
    {
      title: "Ten truyen",
      dataIndex: "title",
    },
    {
      title: "Tac gia",
      dataIndex: "author",
    },
    {
      title: "Hinh anh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Popconfirm
            title="Delete the story"
            description="Are you sure to delete this story?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => remove.mutate(record.id)} // Sử dụng remove
        >
          <Button danger loading={remove.isPending}>Delete</Button>
          </Popconfirm>
          <Link to={`/edit/${record.id}`}>
        <Button type="primary">Edit</Button>
      </Link>
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={list.data} loading={list.isLoading} />;
}