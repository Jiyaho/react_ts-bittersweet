import { Table } from './NoticeTable.styles';
import { useFetchAllPostings } from '../../Api/PostingsApi';
import { Link } from 'react-router-dom';

function NoticeTable() {
  const { data: postings, isLoading, isError } = useFetchAllPostings();

  if (!postings) {
    return <div>Postings are not found..</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>NO</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
      </thead>
      {postings.map((post: any) => (
        <tbody key={post._id}>
          <tr>
            <td>{post.id}</td>
            <td>
              <Link to={`/notice-detail/${post._id}`}>{post.title}</Link>
            </td>
            <td>{post.writer}</td>
            <td>{post.date.slice(0, 10)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
export default NoticeTable;
