import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { fetchMostPopular, searchVideos } from '../api/youtube';
import VideoGrid from '../components/VideoGrid';
import { EmptyState, ErrorState, Loader } from '../components/StateBlocks';

const Home = () => {
  const [params] = useSearchParams();
  const categoryId = params.get('category');

  const selectedCategory = useMemo(() => {
    return categoryId
      ? categories.find((item) => item.id === categoryId) || categories[0]
      : null;
  }, [categoryId]);

  const homeSections = useMemo(() => {
    return ['trending', 'india', 'global', 'kids', 'islamic']
      .map((id) => categories.find((item) => item.id === id))
      .filter(Boolean);
  }, []);

  const categoryQuery = selectedCategory?.query;

  const [items, setItems] = useState([]);
  const [sections, setSections] = useState({});
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const load = async () => {
      setStatus('loading');
      setError('');

      try {
        if (selectedCategory) {
          const data = categoryQuery
            ? await searchVideos({ query: categoryQuery })
            : await fetchMostPopular();

          if (!active) return;

          setItems(data);
          setSections({});
          setStatus('ready');
        } else {
          const results = await Promise.all(
            homeSections.map((section) =>
              section.query
                ? searchVideos({ query: section.query })
                : fetchMostPopular(),
            ),
          );

          if (!active) return;

          const nextSections = homeSections.reduce((acc, section, index) => {
            acc[section.id] = results[index] || [];
            return acc;
          }, {});

          setSections(nextSections);
          setItems([]);
          setStatus('ready');
        }
      } catch (err) {
        if (!active) return;
        setError(err.message || 'Something went wrong.');
        setStatus('error');
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [selectedCategory, categoryQuery, homeSections]);

  if (selectedCategory) {
    return (
      <section>
        <div className="page-header">
          <div>
            <h1>{selectedCategory.label}</h1>
            <p>Fresh picks from a curated library of real videos.</p>
          </div>
          <span className="stat-pill">Curated library</span>
        </div>

        {status === 'loading' && <Loader lines={6} />}
        {status === 'error' && <ErrorState message={error} />}
        {status === 'ready' && items.length === 0 && (
          <EmptyState message="No videos found yet. Try another category." />
        )}
        {status === 'ready' && items.length > 0 && <VideoGrid items={items} />}
      </section>
    );
  }

  return (
    <section className="home-multi">
      <div className="page-header">
        <div>
          <h1>Discover</h1>
          <p>A colorful mix of trending, regional, and genre highlights.</p>
        </div>
        <span className="stat-pill">Curated library</span>
      </div>

      {status === 'loading' && <Loader lines={8} />}
      {status === 'error' && <ErrorState message={error} />}

      {status === 'ready' &&
        homeSections.map((section) => {
          const sectionItems = sections[section.id] || [];
          return (
            <div key={section.id} className="home-section">
              <div className="section-header">
                <div>
                  <h2>{section.label}</h2>
                  <p>
                    {section.query
                      ? `Curated picks for ${section.label}.`
                      : 'Most popular right now.'}
                  </p>
                </div>
                <span className="stat-pill">{sectionItems.length} videos</span>
              </div>

              {sectionItems.length === 0 ? (
                <EmptyState message={`No videos yet for ${section.label}.`} />
              ) : (
                <VideoGrid items={sectionItems} />
              )}
            </div>
          );
        })}
    </section>
  );
};

export default Home;
