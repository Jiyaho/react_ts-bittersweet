import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function useFetchPosts() {
  const queryKey = ['posts'];
  return useQuery(queryKey, async () => {
    const response = await axios.get(`${process.env.REACT_APP_HOST}/api/posts`);
    return response.data.reverse();
  });
}

// export function useFetchPosts() {
//   const queryKey = ['posts'];
//   return useQuery(queryKey, async () => {
//     const response = await axios.get('/api/posts');
//     return response.data.reverse();
//   });
// }
