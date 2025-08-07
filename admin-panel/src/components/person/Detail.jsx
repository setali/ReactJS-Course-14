import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";
import request from "../../assets/tools/request";
import { useState } from "react";
import { Divider } from "antd";

export default function Detail() {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setPerson(data));
  });

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Email: {person.email}</p>
      <Divider />
      <Link to="/person">بازگشت به لیست کاربران</Link>
    </div>
  );
}
