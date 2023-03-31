import { atom, selector } from "recoil";
import { getPosts } from "./fetch";

// 3. create postAtom
export const postAtom = atom({
  key: "PostAtome",
  default: [],
});

//4. fetch selector(get)

export const fetchPosts = selector({
  key: "fetchPosts",
  get: async () => {
    return getPosts();
  },
});
