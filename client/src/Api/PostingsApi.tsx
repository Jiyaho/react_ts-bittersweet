import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postingsUrl } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

export function useFetchAllPostings() {
  const queryKey = ['postings'];
  return useQuery(queryKey, async () => {
    const response = await axios.get(postingsUrl);
    return response.data.reverse();
  });
}

export function useFetchPosting(postId: string | undefined) {
  const queryKeys = ['posting', postId];
  return useQuery(queryKeys, async () => {
    const response = await axios.get(`${postingsUrl}/${postId}`);
    return response.data;
  });
}

export function useDeletePosting() {
  const navigate = useNavigate();
  const deletePosting = async (postId: string | undefined) => {
    const response = await axios.delete(`${postingsUrl}/${postId}`);
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
