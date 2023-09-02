import { Link } from 'react-router-dom';
import { NoticeTableBodyType } from '../../utils/types';

function NoticeTbodyForm({ number, id, onClick, title, writer, date }: NoticeTableBodyType) {
  return (
    <tbody>
      <tr>
        <td>{number}</td>
        <td>
          <Link to={`/notice-detail/${id}`} onClick={onClick}>
            {title}
          </Link>
        </td>
        <td>{writer}</td>
        <td>{date}</td>
      </tr>
    </tbody>
  );
}
export default NoticeTbodyForm;
