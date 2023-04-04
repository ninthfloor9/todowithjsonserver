const getUrls = "http://localhost:8080/api/blogs"; // GET
const postUrls = "http://localhost:8080/api/blogs/add"; // POST

//1. get posts fetch

import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(getUrls);
    console.log(response.data);
    return response.data || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.status);
    return [];
  }
};

//2. post posts fetch

export const postPosts = async (title, body, author) => {
  try {
    const response = await axios.post(postUrls, { title, body, author });
    console.log(response);
    return response.data || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.data);
    return [];
  }
};
