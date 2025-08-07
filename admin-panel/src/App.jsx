import { Layout } from "antd";
import Header from "./components/general/Header";
import Sidebar from "./components/general/Sidebar";
import Footer from "./components/general/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "./components/general/Dashboard";
import PersonRouter from "./components/person/Router";

const { Content } = Layout;

const App = () => (
  <Router>
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Content className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/person/*" element={<PersonRouter />} />
          </Routes>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  </Router>
);
export default App;
