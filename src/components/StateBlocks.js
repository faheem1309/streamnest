const Loader = ({ lines = 4 }) => (
  <div className="loader">
    {Array.from({ length: lines }).map((_, index) => (
      <div key={index} className="loader__line" />
    ))}
  </div>
);

const ErrorState = ({ message }) => (
  <div className="error-state">
    <strong>Could not load content.</strong>
    <p>{message}</p>
  </div>
);

const EmptyState = ({ message }) => <div className="empty-state">{message}</div>;

export { Loader, ErrorState, EmptyState };
