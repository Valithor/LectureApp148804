import http, { URL, URL2 } from './utils';

const API = {
  SEARCH_BY_NAME: (name: string) => `${URL}&s=${name}`,
  SEARCH_BY_ID: (id: string) => `${URL}&i=${id}`,
};
const API_URL = URL;


export interface IPostResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

interface IPostProps {
  posts: IPostResponse[];
}
export interface IPostsProps {
  posts: IPostResponse[];
}

const postService = {    
  searchById: async (id: string) => {
    try {
      const resultById: IPostResponse = await http.get(API.SEARCH_BY_ID(id));
        console.log(resultById);
            return resultById;
    } catch (e) {
      console.log(e);
    }
  },
  getAllPosts: async () => {
    try {
        const response = await http.get(API_URL);
        const result: IPostsProps = {
            posts: response.map((post: IPostResponse) => ({             
                title: post.title,
                body: post.body,
            })),
        };
        return result;
    }
    catch (e) {
        console.log(e);
    }
}

};

export default postService;