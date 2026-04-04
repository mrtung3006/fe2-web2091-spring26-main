import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";

export const useUpdateStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, values }: { id: string | number; values: any }) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, values);
      return res.data;
    },
    onSuccess: () => {
      // Tự động reload danh sách bằng cách invalidate query "stories"
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      message.success("Cập nhật thành công");
    },
    onError: () => {
      message.error("Cập nhật thất bại");
    }
  });
};