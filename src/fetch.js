const apiUrl = "http://localhost:3000/api/users";

//1. get posts fetch

import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data.users);
    return response.data.users || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.status);
    return [];
  }
};
/* 
//2. post posts fetch

export const postPosts = async () => {
  try {
    const response = await axios.post(apiUrl, {});
    return response || [];
  } catch (error) {
    console.log("Error가 났어요", error.response.status);
    return [];
  }
}; */
