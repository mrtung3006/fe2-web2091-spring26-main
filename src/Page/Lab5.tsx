import { Table, Image, Spin, Button, Popconfirm } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const StoryList = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });
    const qc = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: async (id: number) =>
            await axios.delete(`http://localhost:3000/stories/${id}`),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["stories"] });
        },
    });

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            render: (url: string) => <Image src={url} width={60} />,
        },
        {
            title: "Tên truyện",
            dataIndex: "title",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: "Created At",
            dataIndex: "createdAt", 
            render: (date: string) => {
                if (!date) return "N/A"; 
                const d = new Date(date);
                return isNaN(d.getTime())
                    ? "Lỗi định dạng"
                    : d.toLocaleDateString("vi-VN");
            }
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Delete the story"
                    description="Are you sure to delete this story?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => mutate(record.id)}
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            ),
        },
    ];

    if (isLoading) return <Spin />;

    if (isError) return <p>Lỗi khi tải dữ liệu</p>;

    return <Table pagination={{ pageSize: 5 }} columns={columns} dataSource={data} />;
};

export default StoryList;