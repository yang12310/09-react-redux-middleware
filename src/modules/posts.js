import * as postsAPI from "../api/posts"; // api/posts 안의 함수 모두 불러오기
import { createPromiseThunk, reducerUtils, handleAsyncActions } from '../lib/asyncUtils';

/* 초기값 설정 */
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};


/* 액션 타입 */

// 포스트 목록 조회하기
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 내용 조회하기
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";


/* Thunk 함수 */

// thunk 를 사용 할 때, 꼭 모든 액션들에 대하여 액션 생성함수를 만들 필요는 없습니다.
// 그냥 thunk 함수에서 바로 액션 객체를 만들어주어도 괜찮습니다.

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// thunk 함수에서도 파라미터를 받아와서 사용 할 수 있습니다.
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);


/* 리듀서 */

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts')(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, 'post')(state, action);
    default:
      return state;
  }
}
