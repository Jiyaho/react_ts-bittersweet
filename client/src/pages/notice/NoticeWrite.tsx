import { useState } from 'react';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { Section } from './NoticeWrite.styles';
import { newPosting } from '../../features/postingSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
import axios from 'axios';
import { postingsUrl } from '../../utils/constants';

function NoticeWrite() {
  const navigate = useNavigate();
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const onChangeWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = {
        writer,
        title,
        content,
      };
      const response = await axios.post(postingsUrl, body);
      if (response.status === 201) {
        alert('글이 등록되었습니다.');
        navigate('/notice');
      }
    } catch (error) {
      console.log('글 등록 에러: ' + error);
    }
  };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const body = {
  //     writer,
  //     title,
  //     content,
  //   };
  //   try {
  //     await dispatch(newPosting(body));
  //     alert('등록 완료!');
  //     navigate('/notice');
  //   } catch (error) {
  //     console.log(error);
  //     alert('Error: 글이 등록되지 않았습니다.');
  //   }
  // };
  const onClickCancle = () => {
    if (window.confirm('등록을 취소 하시겠습니까?')) {
      navigate('/notice');
    } else return;
  };

  return (
    <Layout>
      <Title title="WRITE" />
      <Section>
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="이름을 입력해 주세요." required max="10" onChange={onChangeWriter} value={writer} />
          <input type="text" placeholder="제목을 입력해 주세요." required max="10" onChange={onChangeTitle} value={title} />
          <textarea cols={50} rows={10} required placeholder="내용을 입력해 주세요." onChange={onChangeContent} value={content} />
          <div>
            <button onClick={onClickCancle}>취소</button>
            <button type="submit">등록</button>
          </div>
        </form>
      </Section>
    </Layout>
  );
}
export default NoticeWrite;
