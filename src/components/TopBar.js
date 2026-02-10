import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchVideos } from '../api/youtube';
import { formatDuration, formatNumber, formatRelativeTime, getThumbnail, getVideoId } from '../utils/format';

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

  useEffect(() => {
    if (location.pathname === '/search') {
      const params = new URLSearchParams(location.search);
      setTerm(params.get('q') || '');
    }
  }, [location]);

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
          setActiveIndex(0);
        })
        .catch(() => {
          if (requestIdRef.current !== requestId) return;
          setSuggestions([]);
          setStatus('error');
        });
    }, SUGGESTION_DELAY_MS);

    return () => clearTimeout(timer);
  }, [term]);

  useEffect(() => {
    if (location.pathname !== '/search') return;
    const query = term.trim();
    const params = new URLSearchParams(location.search);
    const current = params.get('q') || '';
    if (query === current) return;

    const timer = setTimeout(() => {
      if (query) {
        navigate(`/search?q=${encodeURIComponent(query)}`, { replace: true });
      } else {
        navigate('/search', { replace: true });
      }
    }, PREVIEW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [term, location.pathname, location.search, navigate]);

  useEffect(() => {
    const handleClick = (event) => {
      if (!searchRef.current) return;
      if (!searchRef.current.contains(event.target)) {
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
    if (!isOpen) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!suggestions.length) return;
      setHasSelection(true);
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!suggestions.length) return;
      setHasSelection(true);
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
      return;
    }
    if (event.key === 'Enter' && hasSelection && suggestions[activeIndex]) {
      event.preventDefault();
      handleSelect(suggestions[activeIndex]);
      return;
    }
    if (event.key === 'Escape') {
      setIsOpen(false);
      setHasSelection(false);
    }
  };

  const trimmedTerm = term.trim();
  const previewIndex = Math.min(activeIndex, Math.max(0, suggestions.length - 1));
  const previewItem = suggestions[previewIndex];
  const previewThumb = previewItem ? getThumbnail(previewItem) : '';

  return (
    <header className="topbar">
      <div className="topbar__brand">
        <span>StreamNest</span>
        <small>Curated Real Content</small>
      </div>
      <div className="topbar__search-wrap" ref={searchRef}>
        <form className="topbar__search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search videos, creators, or topics"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
              setIsOpen(Boolean(event.target.value.trim()));
              setHasSelection(false);
            }}
            onFocus={() => {
              if (trimmedTerm) setIsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            aria-autocomplete="list"
            aria-expanded={isOpen}
          />
          <button type="submit">Search</button>
        </form>
        {isOpen && trimmedTerm ? (
          <div className="search-suggest" role="listbox">
            <div className="search-suggest__list">
              <span className="search-suggest__header">Suggestions</span>
              {status === 'loading' ? (
                <span className="search-suggest__loading">Searching the curated library...</span>
              ) : null}
              {status === 'error' ? (
                <span className="search-suggest__loading">Search is unavailable right now.</span>
              ) : null}
              {status === 'ready' && suggestions.length === 0 ? (
                <span className="search-suggest__loading">No matches yet. Try a different term.</span>
              ) : null}
              {status === 'ready'
                ? suggestions.map((item, index) => {
                    const isActive = index === previewIndex;
                    const thumb = getThumbnail(item);
                    const duration = formatDuration(item.contentDetails?.duration);
                    const views = formatNumber(item.statistics?.viewCount);
                    const time = formatRelativeTime(item.snippet?.publishedAt);
                    return (
                      <button
                        key={getVideoId(item) || item.snippet?.title || index}
                        type="button"
                        className={`search-suggest__item ${isActive ? 'is-active' : ''}`}
                        onMouseEnter={() => {
                          setActiveIndex(index);
                          setHasSelection(true);
                        }}
                        onClick={() => handleSelect(item)}
                      >
                        <span className="search-suggest__thumb">
                          {thumb ? <img src={thumb} alt={item.snippet?.title || 'Video thumbnail'} /> : null}
                        </span>
                        <span className="search-suggest__meta">
                          <span className="search-suggest__title">{item.snippet?.title}</span>
                          <span className="search-suggest__sub">
                            {item.snippet?.channelTitle || 'Unknown channel'}
                            {views ? ` - ${views} views` : ''}
                            {time ? ` - ${time}` : ''}
                            {duration ? ` - ${duration}` : ''}
                          </span>
                        </span>
                      </button>
                    );
                  })
                : null}
              <button
                type="button"
                className="search-suggest__action"
                onClick={() => {
                  setIsOpen(false);
                  setHasSelection(false);
                  navigate(`/search?q=${encodeURIComponent(trimmedTerm)}`);
                }}
              >
                See all results for "{trimmedTerm}"
              </button>
            </div>
            <div className="search-suggest__preview">
              {previewItem ? (
                <>
                  <div className="search-suggest__preview-thumb">
                    {previewThumb ? (
                      <img src={previewThumb} alt={previewItem.snippet?.title || 'Preview thumbnail'} />
                    ) : (
                      <div className="search-suggest__preview-fallback" />
                    )}
                    {previewItem.contentDetails?.duration ? (
                      <span className="search-suggest__preview-duration">
                        {formatDuration(previewItem.contentDetails.duration)}
                      </span>
                    ) : null}
                  </div>
                  <div className="search-suggest__preview-body">
                    <span className="search-suggest__preview-title">{previewItem.snippet?.title}</span>
                    <span className="search-suggest__preview-meta">
                      {previewItem.snippet?.channelTitle || 'Unknown channel'}
                      {previewItem.statistics?.viewCount
                        ? ` - ${formatNumber(previewItem.statistics.viewCount)} views`
                        : ''}
                      {previewItem.snippet?.publishedAt
                        ? ` - ${formatRelativeTime(previewItem.snippet.publishedAt)}`
                        : ''}
                    </span>
                    {previewItem.snippet?.description ? (
                      <span className="search-suggest__preview-desc">{previewItem.snippet.description}</span>
                    ) : null}
                    <button
                      type="button"
                      className="search-suggest__preview-btn"
                      onClick={() => handleSelect(previewItem)}
                    >
                      Play preview
                    </button>
                  </div>
                </>
              ) : (
                <div className="search-suggest__preview-empty">
                  <span>Keep typing to see a live preview.</span>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <div className="topbar__actions">
        <span className="chip chip--accent">Curated Library</span>
        <span className="chip">Create</span>
      </div>
    </header>
  );
};

export default TopBar;
