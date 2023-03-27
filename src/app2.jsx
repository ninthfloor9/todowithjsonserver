import axios from "axios";
import React from "react";
import { useRecoilState } from "recoil";
import { atom, selector } from "recoil";

// 1. get.axios 데이터를 출력한다
//1-1 데이터를 가져온다. get.axios

const getApi = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data); // 데이터는 잘 가져오나?
    return response.data || [];
  } catch (error) {
    console.log("Error!", error.response.status);
    return [];
  }
};

//1-2 get.axios 는 global state 라서 atom 형태로 가진다.

const postAtom = atom({
  key: "postAtom",
  default: [],
});

//1-3 postAtom 을 구독하는 get.axios의 selector 를 만든다.

const posts = selector({
  key: "Posts",
  get: async () => {
    return getApi();
  },
  set: ({ set }, newPostData) => {
    set(postAtom, newPostData);
  },
});

//1-4 비동기 selector를 가진 컴포넌트를 만든다.

const postApi = async (title, body) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title, body }
    );
    console.log(response.data);
    return response.data || [];
  } catch (error) {
    console.log("Error!", error.response.status);
    return [];
  }
};

export const App2 = () => {
  const [data, setData] = useRecoilState(posts);

  //3-1 input -> post.axios 는 local state 다.(굳이 recoil 쓸필요 없음)
  //3-2 input 값을 post.axios 로 post 한다.

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    try {
      const response = await postApi(title, body);
      console.log(response); // 응답 코드 확인
      setData([...data, response]); // 새로운 포스트를 배열에 추가
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>App2 data</h1>
      {/* 2. input 으로 입력을 한다 */}
      <form onSubmit={onSubmitHandler}>
        <input name="title" />
        <input name="body" />
        <input type="submit" value="추가" />
      </form>
      {data.length > 0 && (
        <>
          <h3>{data[data.length - 1].title}</h3>
          <p>{data[data.length - 1].body}</p>
        </>
      )}
    </div>
  );
};
