const apiUrl = "https://jsonplaceholder.typicode.com/posts";

//1. get posts fetch

import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.status);
    return [];
  }
};

//2. post posts fetch

export const postPosts = async () => {
  try {
    const response = await axios.post(apiUrl, {});
    return response || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.status);
    return [];
  }
};
