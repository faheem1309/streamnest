import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchVideos } from '../api/youtube';
import {
  formatDuration,
  formatNumber,
  formatRelativeTime,
  getThumbnail,
  getVideoId
} from '../utils/format';

const MAX_SUGGESTIONS = 6;
const SUGGESTION_DELAY_MS = 160;
const PREVIEW_DELAY_MS = 240;

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [term, setTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [status, setStatus] = useState('idle');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSelection, setHasSelection] = useState(false);

  const searchRef = useRef(null);
  const requestIdRef = useRef(0);

  /* Sync query from URL */
  useEffect(() => {
    if (location.pathname === '/search') {
      const params = new URLSearchParams(location.search);
      setTerm(params.get('q') || '');
    }
  }, [location]);

  /* Fetch suggestions */
  useEffect(() => {
    const query = term.trim();
    if (!query) {
      setSuggestions([]);
      setStatus('idle');
      setActiveIndex(0);
      return;
    }

    requestIdRef.current += 1;
    const requestId = requestIdRef.current;

    setStatus('loading');
    setSuggestions([]);
    setActiveIndex(0);

    const timer = setTimeout(() => {
      searchVideos({ query, maxResults: MAX_SUGGESTIONS })
        .then((results) => {
          if (requestIdRef.current !== requestId) return;
          setSuggestions(results);
          setStatus('ready');
        })
        .catch(() => {
          if (requestIdRef.current !== requestId) return;
          setSuggestions([]);
          setStatus('error');
        });
    }, SUGGESTION_DELAY_MS);

    return () => clearTimeout(timer);
  }, [term]);

  /* Live URL preview sync */
  useEffect(() => {
    if (location.pathname !== '/search') return;

    const query = term.trim();
    const params = new URLSearchParams(location.search);
    const current = params.get('q') || '';

    if (query === current) return;

    const timer = setTimeout(() => {
      navigate(
        query ? `/search?q=${encodeURIComponent(query)}` : '/search',
        { replace: true }
      );
    }, PREVIEW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [term, location.pathname, location.search, navigate]);

  /* Click outside handler */
  useEffect(() => {
    const handleClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setHasSelection(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (item) => {
    const videoId = getVideoId(item);
    if (!videoId) return;
    setIsOpen(false);
    setHasSelection(false);
    navigate(`/watch/${videoId}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = term.trim();
    if (!next) return;
    setIsOpen(false);
    setHasSelection(false);
    navigate(`/search?q=${encodeURIComponent(next)}`);
  };

  const handleKeyDown = (event) => {
    if (!isOpen || !suggestions.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHasSelection(true);
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHasSelection(true);
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    }

    if (event.key === 'Enter' && hasSelection) {
      event.preventDefault();
      handleSelect(suggestions[activeIndex]);
    }

    if (event.key === 'Escape') {
      setIsOpen(false);
      setHasSelection(false);
    }
  };

  const trimmedTerm = term.trim();
  const previewIndex = suggestions.length
    ? Math.min(activeIndex, suggestions.length - 1)
    : -1;
  const previewItem = previewIndex >= 0 ? suggestions[previewIndex] : null;
  const previewThumb = previewItem ? getThumbnail(previewItem) : '';
  const previewDuration = previewItem?.contentDetails?.duration
    ? formatDuration(previewItem.contentDetails.duration)
    : '';
  const previewMeta = [
    previewItem?.snippet?.channelTitle,
    previewItem?.statistics?.viewCount
      ? `${formatNumber(previewItem.statistics.viewCount)} views`
      : null,
    previewItem?.snippet?.publishedAt
      ? formatRelativeTime(previewItem.snippet.publishedAt)
      : null,
  ]
    .filter(Boolean)
    .join(' | ');

  const handleSearchAll = () => {
    const next = term.trim();
    if (!next) return;
    setIsOpen(false);
    setHasSelection(false);
    navigate(`/search?q=${encodeURIComponent(next)}`);
  };

  return (
    <header className="topbar">
      <div className="topbar__brand">
        <span>StreamNest</span>
        <small>Curated Real Content</small>
      </div>

      <div
        className="topbar__search-wrap"
        ref={searchRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <form className="topbar__search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search videos, creators, or topics"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              setIsOpen(Boolean(e.target.value.trim()));
              setHasSelection(false);
            }}
            onFocus={() => trimmedTerm && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            aria-autocomplete="list"
          />
          <button type="submit">Search</button>
        </form>

        {isOpen && trimmedTerm && (
          <div className="search-suggest" role="listbox">
            <div className="search-suggest__list">
              <div className="search-suggest__header">Top matches</div>

              {status === 'loading' ? (
                <div className="search-suggest__loading">Searching curated library...</div>
              ) : null}

              {status === 'error' ? (
                <div className="search-suggest__loading">Unable to load suggestions.</div>
              ) : null}

              {status === 'ready' && suggestions.length === 0 ? (
                <div className="search-suggest__loading">No matches yet. Try another query.</div>
              ) : null}

              {status === 'ready' &&
                suggestions.map((item, index) => {
                  const id = getVideoId(item);
                  const thumb = getThumbnail(item);
                  const meta = [
                    item.snippet?.channelTitle,
                    item.statistics?.viewCount
                      ? `${formatNumber(item.statistics.viewCount)} views`
                      : null,
                    item.snippet?.publishedAt
                      ? formatRelativeTime(item.snippet.publishedAt)
                      : null,
                  ]
                    .filter(Boolean)
                    .join(' | ');

                  return (
                    <button
                      key={id || `${item.snippet?.title || 'suggestion'}-${index}`}
                      type="button"
                      className={`search-suggest__item ${index === previewIndex ? 'is-active' : ''}`}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => {
                        setActiveIndex(index);
                        setHasSelection(true);
                      }}
                    >
                      <span className="search-suggest__thumb">
                        {thumb ? <img src={thumb} alt={item.snippet?.title || 'Video thumbnail'} /> : null}
                      </span>
                      <span className="search-suggest__meta">
                        <span className="search-suggest__title">{item.snippet?.title || 'Untitled video'}</span>
                        {meta ? <span className="search-suggest__sub">{meta}</span> : null}
                      </span>
                    </button>
                  );
                })}

              <button type="button" className="search-suggest__action" onClick={handleSearchAll}>
                <span>Search for "{trimmedTerm}"</span>
                <span>Enter</span>
              </button>
            </div>

            <div className="search-suggest__preview">
              {previewItem ? (
                <>
                  <div className="search-suggest__preview-thumb">
                    {previewThumb ? (
                      <img src={previewThumb} alt={previewItem.snippet?.title || 'Video thumbnail'} />
                    ) : (
                      <div className="search-suggest__preview-fallback" />
                    )}
                    {previewDuration ? (
                      <span className="search-suggest__preview-duration">{previewDuration}</span>
                    ) : null}
                  </div>
                  <div className="search-suggest__preview-body">
                    <div className="search-suggest__preview-title">
                      {previewItem.snippet?.title || 'Untitled video'}
                    </div>
                    {previewMeta ? (
                      <div className="search-suggest__preview-meta">{previewMeta}</div>
                    ) : null}
                    <div className="search-suggest__preview-desc">
                      {previewItem.snippet?.description || 'No description available.'}
                    </div>
                    <button type="button" className="search-suggest__preview-btn" onClick={() => handleSelect(previewItem)}>
                      Open video
                    </button>
                  </div>
                </>
              ) : (
                <div className="search-suggest__preview-empty">No preview yet.</div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="topbar__actions">
        <span className="chip chip--accent">Curated Library</span>
        <span className="chip">Create</span>
      </div>
    </header>
  );
};

export default TopBar;
