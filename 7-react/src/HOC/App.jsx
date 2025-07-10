import React from "react";
import Posts from "./Posts";
import Button from "./Button";

export default function HOCApp() {
  return (
    <div>
      <Button permission="ADD_POST">Add Post</Button>
      <Posts permission="VIEW_POST_LIST" />
    </div>
  );
}
