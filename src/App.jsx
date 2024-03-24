import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Login from "./views/Login";
import Logout from "./views/Logout";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Content style={{ padding: "50px" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
