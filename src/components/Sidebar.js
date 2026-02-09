import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/categories';
import { hasApiKey } from '../api/youtube';

const Sidebar = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get('category') || 'trending';

  return (
    <aside className="sidebar">
      <div className="sidebar__panel">
        <div className="sidebar__title">Discover</div>
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <Link
              key={category.id}
              className={`sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
              to={`/?category=${category.id}`}
            >
              <span>{category.label}</span>
              <span>&gt;</span>
            </Link>
          );
        })}
      </div>
      <div className="sidebar__panel">
        <div className="sidebar__title">Build</div>
        <div className="empty-state">
          {hasApiKey()
            ? 'You are pulling live YouTube data. Open any video to explore details, comments, and related content.'
            : 'Add a YouTube Data API key in .env to unlock live videos, comments, and channels.'}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
