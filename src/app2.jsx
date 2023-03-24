import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import { selector } from "recoil";

//fetch with global state
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const fetchApi = selector({
  key: "FetchApi",
  get: async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data || [];
    } catch (error) {
      console.log("Error! : \n${error}");
      return [];
    }
  },
});

//local state , input

// post 요청 시 state 변경에 대한 표시가 이루어져야 한다
export const App2 = () => {
  const dummyData = useRecoilValue(fetchApi);
  console.log("state", fetchApi);
  return (
    <div className="App2">
      <h1>App2 data</h1>
      {dummyData.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
        </div>
      ))}
      ;
    </div>
  );
};
