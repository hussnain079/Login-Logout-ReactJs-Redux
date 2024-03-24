import { useDispatch } from "react-redux";
import { Button } from "antd";
import { logout } from "../redux/Slice/authSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    window.history.replaceState(null, "", "/");
  };

  return (
    <Button type="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
