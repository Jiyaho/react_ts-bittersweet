import { useWithdrawal } from '../../Api/UsersApi';

function Withdrawal() {
  const { mutate: withdrawal } = useWithdrawal();
  const handleWithdrawal = async () => {
    if (window.confirm('정말로 회원 탈퇴 하시겠습니까?')) {
      try {
        await withdrawal();
        alert('회원 탈퇴가 완료되었습니다.');
      } catch (error) {
        console.error('회원 탈퇴 중 오류가 발생했습니다.', error);
      }
    }
  };
  return <button onClick={handleWithdrawal}>회원 탈퇴</button>;
}
export default Withdrawal;
