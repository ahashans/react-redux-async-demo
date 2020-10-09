import React from "react";
import { useBooleanInputState } from "../../hooks/useInputState";
import EditPostForm from "./EditPostForm";
import { deletePost } from "../../actions";
import { connect } from "react-redux";

const Post = ({ post, deletePost }) => {
  const [isEditing, setIsEditing] = useBooleanInputState();

  if (isEditing) {
    return <EditPostForm toggleEditView={setIsEditing} postToEdit={post} />;
  }
  return (
    <div className="w-full mx-auto bg-gray-200 mb-2 border rounded p-2">
      <div className="font-bold text-xl mb-2">{post.title}</div>
      <p className="text-grey-darker text-base">{post.body}</p>
      <div className="flex mb-4 items-center">
        <button
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-400"
          onClick={setIsEditing}
        >
          Edit
        </button>
        <button
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-400"
          onClick={() => deletePost(post.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default connect(null, { deletePost })(Post);
