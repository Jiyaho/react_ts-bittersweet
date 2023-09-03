import { useState } from 'react';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { Section } from './NoticeWrite.styles';

function NoticeWrite() {
  const navigate = useNavigate();
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeWriter = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setWriter(target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setWriter(target.value);
  };
  const onChangeContent = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setWriter(target.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const onClickCancle = () => {
    if (window.confirm('등록을 취소 하시겠습니까?')) {
      navigate('/notice');
    } else return;
  };
  return (
    <Layout>
      <Title title="WRITE" />
      <Section>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="이름을 입력해 주세요." required max="10" onChange={onChangeWriter} value={writer} />
          <input type="text" placeholder="제목을 입력해 주세요." required max="10" onChange={onChangeTitle} value={title} />
          <textarea cols={50} rows={10} required placeholder="내용을 입력해 주세요." onChange={onChangeContent} value={content} />
          <div>
            <button onClick={onClickCancle}>취소</button>
            <button type="submit" onSubmit={onSubmit}>
              등록
            </button>
          </div>
        </form>
      </Section>
    </Layout>
  );
}
export default NoticeWrite;
