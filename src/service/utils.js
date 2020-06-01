
const http = {
    get: (url) => fetch(url).then(resp => resp.json()),
  };
  
  export default http;
  export const URL = `https://jsonplaceholder.typicode.com/posts`;
  export const URL2 = `https://jsonplaceholder.typicode.com/comments`;