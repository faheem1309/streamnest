import { Link } from 'react-router-dom';

const NotFound = () => (
  <section>
    <div className="page-header">
      <div>
        <h1>Page Not Found</h1>
        <p>That route does not exist yet.</p>
      </div>
    </div>
    <div className="empty-state">
      Return to the <Link to="/">home feed</Link> to keep exploring.
    </div>
  </section>
);

export default NotFound;
