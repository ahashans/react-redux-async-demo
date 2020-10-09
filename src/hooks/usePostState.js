import { useState } from "react";
// import { v4 as uuid } from "uuid";
const usePostState = ({ id = 0, userId = 0, title = "", body = "" }) => {
    const [post, setPost] = useState({ id, userId, title, body });
    const resetPost = () => {
        setPost({ id: 0, userId: 0, title: "", body: "" });
    };
    return [post, setPost, resetPost];
};
export default usePostState;