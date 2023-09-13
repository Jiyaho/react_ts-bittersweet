import axios from 'axios';
import { usersUrl } from '../utils/constants';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useGetUserName() {
  return useQuery(['userName'], async () => {
    const response = await axios.get(usersUrl);
    return response.data.userId;
  });
}

export function useLogout() {
  return useMutation(() => {
    return axios.get(`${usersUrl}/logout`); // 로그아웃 요청을 서버로 보냅니다.
  });
}
