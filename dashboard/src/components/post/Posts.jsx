import request from "@/tools/request";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    request("https://jsonplaceholder.typicode.com/posts").then(({ data }) =>
      setPosts(data)
    );
  }, []);

  return (
    <div className="border p-2 w-full">
      <h3>Posts</h3>
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
