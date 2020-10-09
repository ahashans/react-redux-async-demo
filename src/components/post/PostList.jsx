import React, { useEffect } from "react";
import Post from "./Post.jsx";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const list = posts.map((post) => <Post key={post.id} post={post} />);
  return <div className="flex flex-col"> {list} </div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, {
  fetchPosts,
})(PostList);
