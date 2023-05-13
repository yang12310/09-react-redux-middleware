import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getPost, goToHome} from '../modules/posts';
import Post from '../components/Post';
import { useNavigate } from 'react-router-dom';

function PostContainer({postId}){
    const {data, loading, error} = useSelector(state => state.posts.post);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPost(postId));
    },[postId, dispatch]);

    const navigate =useNavigate();

    if (loading) return <div>로딩중...</div>;
    if(error) return <div>에러 발생!</div>;
    if (!data) return null;

    return (
        <>
            <button onClick={() => dispatch(goToHome(navigate))}>홈으로 이동</button>
            <Post post={data} />
        </>
    );
}
export default PostContainer;