import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import { selector } from "recoil";

//fetch
const getApi = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data || [];
  } catch (error) {
    console.log("Error!", error.response.status);
    return [];
  }
};

const postApi = async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const body = e.target.body.value;
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title, body }
    );
    console.log(response); // 응답 코드 확인
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//fetch selector
const fetchApi = selector({
  key: "FetchApi",
  get: async () => {
    const data = await getApi();
    return data;
  },
  set: async ({ set, get }, value) => {
    const data = await postApi(value);
    set(fetchApi, [...get(fetchApi), data]);
  },
});

//rendering
export const App2 = () => {
  const dummyData = useRecoilValue(fetchApi);
  return (
    <div className="App2">
      <form onSubmit={postApi}>
        <input name="title" />
        <input name="body" />
        <input type="submit" value="추가" />
      </form>
      <h1>App2 data</h1>
      <h3>{dummyData[dummyData.length - 1].title}</h3>
      <p>{dummyData[dummyData.length - 1].body}</p>
    </div>
  );
};
