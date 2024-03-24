import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { login } from "../redux/Slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("/login", values);
      dispatch(login(response.data.token));
      navigate("/logout");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        name="login"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Log in
        </Button>
      </Form.Item>
      <h5>UserName: correct_login@example.com</h5>
      <h5>Password: C0rr3Ct_P@55w0rd</h5>
    </Form>
  );
};

export default Login;
