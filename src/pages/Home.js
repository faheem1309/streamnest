import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { fetchMostPopular, searchVideos } from '../api/youtube';
import VideoGrid from '../components/VideoGrid';
import { EmptyState, ErrorState, Loader } from '../components/StateBlocks';

const Home = () => {
  const [params] = useSearchParams();
  const categoryId = params.get('category') || 'trending';
  const category = categories.find((item) => item.id === categoryId) || categories[0];
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const load = async () => {
      setStatus('loading');
      setError('');
      try {
        const data = category.query
          ? await searchVideos({ query: category.query })
          : await fetchMostPopular();
        if (active) {
          setItems(data);
          setStatus('ready');
        }
      } catch (err) {
        if (active) {
          setError(err.message || 'Something went wrong.');
          setStatus('error');
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [category.id, category.query]);

  return (
    <section>
      <div className="page-header">
        <div>
          <h1>{category.label}</h1>
          <p>Fresh picks powered by live YouTube data.</p>
        </div>
        <span className="stat-pill">Updated just now</span>
      </div>
      {status === 'loading' ? <Loader lines={6} /> : null}
      {status === 'error' ? <ErrorState message={error} /> : null}
      {status === 'ready' && items.length === 0 ? (
        <EmptyState message="No videos found yet. Try another category." />
      ) : null}
      {status === 'ready' && items.length > 0 ? <VideoGrid items={items} /> : null}
    </section>
  );
};

export default Home;
