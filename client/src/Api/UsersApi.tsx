import axios from 'axios';
import { usersUrl } from '../utils/constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserProfileType, ApiResponseType } from '../utils/types';

// 로그아웃
export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return axios.get(`${usersUrl}/logout`, { withCredentials: true });
    },
    {
      // 로그아웃 요청이 성공했을 때 실행될 콜백 함수
      onSuccess: () => {
        // auth 쿼리를 무효화하여 사용자 인증 정보 초기화 및 업데이트
        queryClient.invalidateQueries(['auth']);
        window.location.reload();
      },
    }
  );
}

// 로그인한 사용자 인증 데이터
export function useAuth() {
  const queryKey = ['auth'];
  return useQuery(queryKey, async () => {
    const response = await axios.get(`${usersUrl}/auth`, { withCredentials: true });
    return response.data;
  });
}

// 회원 탈퇴
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
      // 탈퇴 요청 성공 시, auth 쿼리 무효화하여 사용자 인증 정보 초기화 및 업데이트
      onSuccess: () => {
        queryClient.invalidateQueries(['auth']);
      },
    }
  );
}

// 회원 정보 수정
export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponseType, Error, UserProfileType>(
    async (updatedUserInfo) => {
      try {
        const response = await axios.patch<ApiResponseType>(`${usersUrl}/update-profile`, updatedUserInfo, {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        throw new Error('회원 정보 수정 중 오류가 발생했습니다.');
      }
    },
    {
      // 회원 정보 수정 요청 성공 시, auth 쿼리 무효화하여 사용자 인증 정보 초기화 및 업데이트
      onSuccess: () => {
        queryClient.invalidateQueries(['auth']);
      },
    }
  );
}

// 회원 정보 수정 시 이메일 중복 확인
export function useCheckSameEmail() {
  // const queryClient = useQueryClient();

  return useMutation(
    async (email) => {
      // 중복 확인 API 엔드포인트로 요청을 전송
      const response = await axios.get(`${usersUrl}/check-email?email=${email}`, { withCredentials: true });
      return response.data;
    },
    {
      // 성공 시에 실행할 로직을 정의
      // onSuccess: () => {},
    }
  );
}
