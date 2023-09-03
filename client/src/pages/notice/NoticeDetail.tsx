import { useNavigate } from 'react-router-dom';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { Section } from './NoticeDetail.styles';

function NoticeDetail() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Title title="NOTICE DETAIL" />
      <Section>
        <table>
          <thead>
            <tr>
              <th>글 제목입니다.</th>
              <th>작성자</th>
              <th>2023-09-04</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>글 내용입니다.</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={() => navigate(-1)}>목록</button>
          <button onClick={() => navigate(`/notice-edit`)}>수정</button>
          <button>삭제</button>
        </div>
      </Section>
    </Layout>
  );
}
export default NoticeDetail;
