import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { useFetchPosting } from '../../Api/PostingsApi';
import { useState } from 'react';
import { Section } from './NoticeWrite.styles';
import axios from 'axios';
import { postingsUrl } from '../../utils/constants';

function NoticeEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: posting, isLoading, isError } = useFetchPosting(id);
  const [writer, setWriter] = useState(posting ? posting.writer : '');
  const [title, setTitle] = useState(posting ? posting.title : '');
  const [content, setContent] = useState(posting ? posting.content : '');

  const writerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const editSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = {
        writer,
        title,
        content,
      };
      const response = await axios.patch(`${postingsUrl}/${id}`, body);
      if (response.status === 200) {
        alert('글이 수정되었습니다.');
        navigate('/notice');
      }
    } catch (error) {
      console.log('글이 수정 에러: ' + error);
    }
  };

  const onClickCancle = () => {
    if (window.confirm('등록을 취소 하시겠습니까?')) {
      navigate('/notice');
    } else return;
  };

  if (!posting) {
    return <div>Posting is not found..</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Layout>
      <Title title="NOTICE EDIT" />
      <Section>
        <form onSubmit={editSubmitHandler}>
          <input type="text" placeholder={posting.writer} required onChange={writerHandler} value={writer} />
          <input type="text" placeholder={posting.title} required onChange={titleHandler} value={title} />
          <textarea cols={50} rows={10} placeholder={posting.content} onChange={contentHandler} value={content} />
          <div>
            <button onClick={onClickCancle}>취소</button>
            <button type="submit">등록</button>
          </div>
        </form>
      </Section>
    </Layout>
  );
}
export default NoticeEdit;
