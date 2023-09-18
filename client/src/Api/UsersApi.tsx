import axios from 'axios';
import { usersUrl } from '../utils/constants';
import { useMutation, useQuery } from '@tanstack/react-query';

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
