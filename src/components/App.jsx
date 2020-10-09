import React from "react";
import PostForm from "./post/PostForm.jsx";
import PostList from "./post/PostList.jsx";
const App = () => {
  return (
    <div className="flex flex-col w-2/3">
      <PostList />
      <PostForm />
    </div>
  );
};

export default App;
