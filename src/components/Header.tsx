import { Avatar, Button } from "antd";
import { useAuthStore } from "../stores/useAuthStore";

const Header = () => {

  const { user, logout } = useAuthStore();

  return (
    <div style={{ display: "flex", alignItems: "center", justifyItems: "space-between", padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        {user ? (
          <>
            <Avatar src={user.avatar} />
            <span>{user.email} </span>
            <Button size="small" danger onClick={logout}>
              Đăng xuất
            </Button>
          </>
        ) : (
          <span>Chưa đăng nhập</span>
        )}
      </div>
    </div>
  );
};

export default Header;