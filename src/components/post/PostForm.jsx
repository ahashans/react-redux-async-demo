import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions";
import usePostState from "../../hooks/usePostState";
const PostForm = ({ createPost }) => {
  const [post, setPost, resetPost] = usePostState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.title !== "" && post.body !== "") {
      createPost(post);
      resetPost();
    } else {
      alert("cannot submit with empty value");
    }
  };
  const handleInputChange = (e) => {
    const updatedPost = { ...post, [e.target.name]: e.target.value };
    setPost(updatedPost);
  };
  return (
    <form
      className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mx-auto mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter Title"
          value={post.title}
          name="title"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Body
        </label>
        <textarea
          className="resize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Post"
          name="body"
          value={post.body}
          onChange={handleInputChange}
          rows="5"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default connect(null, { createPost })(PostForm);
