import axios from 'axios';

// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: "프로젝트를 개발하는데 있어 제일 중요한 것은?",
    body: "시스템 설계는 프로젝트를 개발하는데 가장 기본이 됩니다.",
  },
  {
    id: 2,
    title: "효율적인 시스템 개발 방법은?",
    body: "시나리오를 바탕으로 한 Use-Case를 잘 작성하는 것입니다.",
  },
  {
    id: 3,
    title: "좋은 시스템이란 어떤 시스템 인가요?",
    body: "목적이 분명하고, 기능이 명확하며, 결과가 확실해야 합니다.",
  },
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/posts');
  return response.data;
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};
