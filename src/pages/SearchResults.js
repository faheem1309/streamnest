import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchVideos } from '../api/youtube';
import VideoGrid from '../components/VideoGrid';
import { EmptyState, ErrorState, Loader } from '../components/StateBlocks';

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      setItems([]);
      setStatus('idle');
      return;
    }

    let active = true;
    const load = async () => {
      setStatus('loading');
      setError('');
      try {
        const data = await searchVideos({ query });
        if (active) {
          setItems(data);
          setStatus('ready');
        }
      } catch (err) {
        if (active) {
          setError(err.message || 'Search failed.');
          setStatus('error');
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [query]);

  return (
    <section>
      <div className="page-header">
        <div>
          <h1>Search</h1>
          <p>{query ? `Results for “${query}”` : 'Type a query to explore.'}</p>
        </div>
        {query ? <span className="stat-pill">Live results</span> : null}
      </div>
      {status === 'idle' ? <EmptyState message="Start a search to see real content." /> : null}
      {status === 'loading' ? <Loader lines={6} /> : null}
      {status === 'error' ? <ErrorState message={error} /> : null}
      {status === 'ready' && items.length === 0 ? (
        <EmptyState message="No videos matched that query." />
      ) : null}
      {status === 'ready' && items.length > 0 ? <VideoGrid items={items} /> : null}
    </section>
  );
};

export default SearchResults;
