import {
  SettingOutlined,
  UserOutlined,
  EditOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Menu as AntMenu } from "antd";
import { Link } from "react-router";

const items = [
  {
    key: "dashboard",
    label: <Link to={"/"}>داشبورد</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: "user-management",
    label: "مدیریت کاربران",
    icon: <UserOutlined />,
    children: [
      { key: "users-list", label: <Link to="/person">لیست کاربران</Link> },
      { key: "user-create", label: <Link to="/person/add">ایجاد کاربر</Link> },
    ],
  },
  {
    key: "article-management",
    label: "مدیریت مقالات",
    icon: <EditOutlined />,
    children: [
      { key: "articles-list", label: "لیست مقالات" },
      { key: "article-create", label: "ایجاد مقاله" },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "settings",
    label: " تنظیمات",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];
const Menu = () => {
  return (
    <AntMenu
      style={{ width: 256 }}
      defaultSelectedKeys={["dashboard"]}
      defaultOpenKeys={["user-management", "article-management"]}
      mode="inline"
      items={items}
    />
  );
};
export default Menu;
