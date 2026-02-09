import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (location.pathname === '/search') {
      const params = new URLSearchParams(location.search);
      setTerm(params.get('q') || '');
    }
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = term.trim();
    if (!next) return;
    navigate(`/search?q=${encodeURIComponent(next)}`);
  };

  return (
    <header className="topbar">
      <div className="topbar__brand">
        <span>StreamNest</span>
        <small>Curated Real Content</small>
      </div>
      <form className="topbar__search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search videos, creators, or topics"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="topbar__actions">
        <span className="chip chip--accent">Curated Library</span>
        <span className="chip">Create</span>
      </div>
    </header>
  );
};

export default TopBar;
