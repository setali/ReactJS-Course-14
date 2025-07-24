import request from "@/tools/request";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

export default function Post() {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    request(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      ({ data }) => setPost(data)
    );
  }, [id]);

  return (
    <div className="border p-2 w-full">
      <h3 className="text-2xl text-green-600">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
