import axios from 'axios';
import { usersUrl } from '../utils/constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useLogout() {
  return useMutation(() => {
    return axios.get(`${usersUrl}/logout`, { withCredentials: true }); // 로그아웃 요청을 서버로 보냅니다.
  });
}

export function useAuth() {
  const queryKey = ['auth'];
  return useQuery(queryKey, async () => {
    const response = await axios.get(`${usersUrl}/auth`, { withCredentials: true });
    return response.data;
  });
}

export function useWithdrawal() {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      try {
        await axios.delete(`${usersUrl}/delete-account`, { withCredentials: true });
      } catch (error) {
        throw new Error('회원 탈퇴 중 오류가 발생했습니다.');
      }
    },
    {
      // 탈퇴 요청 성공 시, auth쿼리 무효화하여 사용자 인증 정보 초기화
      onSuccess: () => {
        queryClient.invalidateQueries(['auth']);
      },
    }
  );
}
