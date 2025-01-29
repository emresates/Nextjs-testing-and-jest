import axios from "axios";

const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => response.data);
};

const getPost = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((response) => response.data);
};
// const getPosts = () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.data);
// };

// const getPost = (id: number) => {
//   return axios
//     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((response) => response.data);
// };

const postService = {
  getPosts,
  getPost,
};

export default postService;
