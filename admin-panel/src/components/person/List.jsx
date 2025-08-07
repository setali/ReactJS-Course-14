import React from "react";
import { useEffect } from "react";
import request from "../../assets/tools/request";
import { useState } from "react";
import { Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router";

const COLUMNS = [
  { title: "نام", key: "name", dataIndex: "name" },
  { title: "ایمیل", key: "email", dataIndex: "email" },
  {
    title: "آدرس",
    key: "address",
    dataIndex: "address",
    render: (el) => `${el.suite} ${el.zipcode}`,
  },
  {
    key: "action",
    render: (_, record) => (
      <Link to={`/person/${record.id}`}>
        <EyeOutlined />
      </Link>
    ),
  },
];

export default function List() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    request("/users")
      .then(({ data }) => setPeople(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h3>لیست کاربران</h3>
      <Table
        dataSource={people}
        columns={COLUMNS}
        rowKey={"id"}
        loading={loading}
      />
    </div>
  );
}
