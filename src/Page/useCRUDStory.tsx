import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { message } from "antd";

const API_URL = "http://localhost:3000/stories";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  // 1. Lấy danh sách (List)
  const list = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get(API_URL);
      return res.data;
    },
  });

  // Hàm helper để làm mới danh sách
  const refresh = () => queryClient.invalidateQueries({ queryKey: ["stories"] });

  // 2. Thêm mới (Add)
  const add = useMutation({
    mutationFn: (data: any) => axios.post(API_URL, data),
    onSuccess: () => {
      refresh();
      toast.success("Thêm truyện thành công");
    },
  });

  // 3. Xóa (Remove)
  const remove = useMutation({
    mutationFn: (id: number | string) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      refresh();
      message.success("Xóa thành công");
    },
  });

  // 4. Cập nhật (Update)
  const update = useMutation({
    mutationFn: ({ id, values }: { id: string | number; values: any }) =>
      axios.put(`${API_URL}/${id}`, values),
    onSuccess: () => {
      refresh();
      // Chúng ta cũng nên xóa cache của chính truyện đó để Lab6 cập nhật dữ liệu mới nhất
      queryClient.invalidateQueries({ queryKey: ["story"] }); 
    },
  });

  return { list, add, remove, update };
};