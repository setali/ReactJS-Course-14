import React from "react";
import Button from "./Button";
import { acl } from "./acl";

const posts = Array(10)
  .fill(0)
  .map((el, i) => ({
    id: i + 1,
    title: `Title ${i + 1}`,
  }));

function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}

            <Button permission="EDIT_POST">Edit</Button>
            <Button permission="DELETE_POST">Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default acl(Posts);
