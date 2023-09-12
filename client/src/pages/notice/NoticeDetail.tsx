import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { Section } from './NoticeDetail.styles';
import { useDeletePosting, useFetchPosting } from '../../Api/PostingsApi';

function NoticeDetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // 게시글 id
  const deletePosting = useDeletePosting();
  const { data: posting, isLoading, isError } = useFetchPosting(id);

  if (!posting) {
    return <div>Posting is not found..</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  // 삭제 버튼 클릭 시 해당 글 삭제 후 이전 화면으로 이동
  const handleDelete = () => {
    deletePosting(id);
  };

  return (
    <Layout>
      <Title title="NOTICE DETAIL" />
      <Section>
        <table key={posting._id}>
          <thead>
            <tr>
              <th>{posting.title}</th>
              <th>{posting.writer}</th>
              <th>{posting.date.slice(0, 10)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{posting.content}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={() => navigate(-1)}>목록</button>
          <button onClick={() => navigate(`/notice-edit/${id}`)}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </Section>
    </Layout>
  );
}
export default NoticeDetail;
