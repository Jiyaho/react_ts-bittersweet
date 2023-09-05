import { Link } from 'react-router-dom';
import ScrollButton from '../../components/atoms/ScrollButton';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import NoticeTable from '../../components/notice/NoticeTable';
import { Button } from './Notice.styles';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../Api/FetchData';

function Notice() {
  // const [posts, setPosts] = useState([]);

  // const { isLoading, data } = useQuery(['key'], fetchPosts);

  return (
    <Layout>
      <Title title="NOTICE" />
      <ScrollButton />
      <section>
        <Link to={'/notice-write'}>
          <Button>📝 WRITE</Button>
        </Link>
        <article>
          <NoticeTable />
        </article>
      </section>
    </Layout>
  );
}
export default Notice;
