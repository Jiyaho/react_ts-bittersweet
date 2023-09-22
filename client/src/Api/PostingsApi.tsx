import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postingsUrl } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

// 모든 게시글 가져오기
export function useFetchAllPostings() {
  const queryKey = ['postings'];
  return useQuery(queryKey, async () => {
    const response = await axios.get(postingsUrl, { withCredentials: true });
    return response.data.reverse();
  });
}

// 특정 게시글 가져오기(Notice-detail page)
export function useFetchPosting(postId: string | undefined) {
  const queryKeys = ['posting', postId];
  return useQuery(queryKeys, async () => {
    const response = await axios.get(`${postingsUrl}/${postId}`, { withCredentials: true });
    return response.data;
  });
}

// 게시글 삭제하기
export function useDeletePosting() {
  const navigate = useNavigate();
  const deletePosting = async (postId: string | undefined) => {
    const response = await axios.delete(`${postingsUrl}/${postId}`, { withCredentials: true });
    return response.data;
  };

  // useMutation 훅을 사용하여 삭제 작업을 정의
  const { mutate } = useMutation(deletePosting, {
    onSuccess: () => {
      if (window.confirm('글을 삭제 하시겠습니까?')) {
        navigate('/notice');
      } else return;
    },
  });

  return mutate;
}
