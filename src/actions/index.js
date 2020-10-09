import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async(dispatch)=>{
    let {data} = await jsonPlaceholder.get('/posts');
    data = _.drop(data, 95);
    dispatch({type: 'FETCH_POSTS', payload:data});
};

export const createPost = ({title, body}) => async dispatch=>{
    let {data}  = await jsonPlaceholder.post('/posts',{title, body, userId:_.random(1,10)});
    dispatch({type:'CREATE_POST', payload:data});
};

export const updatePost = (post) => async dispatch=>{
    let {data}  = await jsonPlaceholder.put(`/posts/${post.id}`,post);
    dispatch({type:'UPDATE_POST', payload:data});
};

export const deletePost = (postId) => async dispatch=>{
    await jsonPlaceholder.delete(`/posts/${postId}`);
    dispatch({type:'DELETE_POST', payload:postId});
};