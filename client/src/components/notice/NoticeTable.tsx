import NoticeTbodyForm from './NoticeTbodyForm';
import { Table } from './FormOfNotice.styles';

function NoticeTable() {
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
      {/* <NoticeTbodyForm key={post.id} id={post.id} /> */}
      <tbody>
        <tr>
          <td>2</td>
          <td>제목입니다</td>
          <td>Janet</td>
          <td>2023-09-04</td>
        </tr>
        <tr>
          <td>1</td>
          <td>제목입니다</td>
          <td>Janet</td>
          <td>2023-09-04</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default NoticeTable;
