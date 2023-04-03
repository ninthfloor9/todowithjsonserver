const urls = "http://localhost:8080/api/blogs"; // GET, POST 둘다 가능

//1. get posts fetch

import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(urls);
    console.log(response.data);
    return response.data || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.status);
    return [];
  }
};

//2. post posts fetch

export const postPosts = async (title) => {
  try {
    const response = await axios.post(urls, { title });
    console.log(response);
    return response.data || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.data);
    return [];
  }
};
