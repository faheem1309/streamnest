import { Link } from 'react-router-dom';
import { useNowPlaying } from '../utils/nowPlaying';
import { formatDuration, getThumbnail, getVideoId } from '../utils/format';

const NowPlayingBar = () => {
  const { nowPlaying, clearNowPlaying } = useNowPlaying();

  if (!nowPlaying) return null;

  const videoId = getVideoId(nowPlaying);
  const thumbnail = getThumbnail(nowPlaying);
  const title = nowPlaying.snippet?.title || 'Now playing';
  const channelTitle = nowPlaying.snippet?.channelTitle || '';
  const duration = nowPlaying.contentDetails?.duration
    ? formatDuration(nowPlaying.contentDetails.duration)
    : '';

  return (
    <div className="now-playing">
      <div className="now-playing__content">
        <Link className="now-playing__thumb" to={`/watch/${videoId}`} aria-label={`Open ${title}`}>
          {thumbnail ? <img src={thumbnail} alt={title} /> : <div className="now-playing__thumb-fallback" />}
          {duration ? <span className="now-playing__duration">{duration}</span> : null}
        </Link>
        <div className="now-playing__meta">
          <span className="now-playing__label">Now Playing</span>
          <Link to={`/watch/${videoId}`} className="now-playing__title">
            {title}
          </Link>
          {channelTitle ? <span className="now-playing__channel">{channelTitle}</span> : null}
        </div>
      </div>
      <div className="now-playing__actions">
        <Link to={`/watch/${videoId}`} className="now-playing__btn">
          Open
        </Link>
        <button type="button" className="now-playing__btn now-playing__btn--ghost" onClick={clearNowPlaying}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NowPlayingBar;
