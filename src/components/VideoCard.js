import { Link } from 'react-router-dom';
import { formatDuration, formatNumber, formatRelativeTime, getThumbnail, getVideoId } from '../utils/format';

const VideoCard = ({ item }) => {
  const videoId = getVideoId(item);
  const thumbnail = getThumbnail(item);
  const { snippet, statistics, contentDetails } = item;
  const channelId = snippet?.channelId;

  return (
    <div className="video-card">
      <Link className="video-card__thumb" to={`/watch/${videoId}`}>
        {thumbnail ? <img src={thumbnail} alt={snippet?.title || 'Video thumbnail'} /> : null}
        {contentDetails?.duration ? (
          <span className="video-card__duration">{formatDuration(contentDetails.duration)}</span>
        ) : null}
      </Link>
      <div className="video-card__body">
        <Link to={`/watch/${videoId}`}>
          <h3 className="video-card__title">{snippet?.title}</h3>
        </Link>
        <div className="video-card__meta">
          {channelId ? (
            <Link to={`/channel/${channelId}`}>{snippet?.channelTitle}</Link>
          ) : (
            <span>{snippet?.channelTitle}</span>
          )}
          {statistics?.viewCount ? (
            <span>{formatNumber(statistics.viewCount)} views</span>
          ) : null}
          {snippet?.publishedAt ? <span>{formatRelativeTime(snippet.publishedAt)}</span> : null}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
