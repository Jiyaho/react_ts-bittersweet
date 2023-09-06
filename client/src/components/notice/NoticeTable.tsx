import { Table } from './FormOfNotice.styles';
import { useFetchPosts } from '../../Api/useFetchData';
import { NoticeTableBodyType } from '../../utils/types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
function NoticeTable() {
  const { data: posts, isLoading, isError } = useFetchPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  // const [posts, setPosts] = useState([]);
  // const getPosts = () => {
  //   axios.get(`http://localhost:5000/api/posts`).then((response) => {
  //     let post = response.data.reverse();
  //     console.log(post);
  //     setPosts(post);
  //   });
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

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
      {posts ? (
        posts.map((post: NoticeTableBodyType) => (
          <tbody key={post._id}>
            <tr>
              <td>{post._id}</td>
              <td>
                <Link to={`/notice-detail/${post._id}`}>{post.title}</Link>
              </td>
              <td>{post.writer}</td>
              <td>{post.date}</td>
            </tr>
          </tbody>
        ))
      ) : (
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
      )}

      {/* <NoticeTbodyForm key={post.id} id={post.id} /> */}
      {/* <tbody>
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
      </tbody> */}
    </Table>
  );
}
export default NoticeTable;
