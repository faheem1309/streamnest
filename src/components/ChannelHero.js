import { formatNumber } from '../utils/format';

const ChannelHero = ({ channel }) => {
  if (!channel) return null;
  const { snippet, statistics } = channel;
  return (
    <div className="channel-hero">
      <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
      <div>
        <h2>{snippet?.title}</h2>
        <p>{snippet?.description?.slice(0, 140) || 'Creator spotlight'}</p>
        <div className="watch-stats">
          {statistics?.subscriberCount ? (
            <span className="stat-pill">{formatNumber(statistics.subscriberCount)} subscribers</span>
          ) : null}
          {statistics?.videoCount ? (
            <span className="stat-pill">{formatNumber(statistics.videoCount)} videos</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChannelHero;
