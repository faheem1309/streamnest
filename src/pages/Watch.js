import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchComments, fetchRelatedVideos, fetchVideoById } from '../api/youtube';
import VideoGrid from '../components/VideoGrid';
import { EmptyState, ErrorState, Loader } from '../components/StateBlocks';
import { formatNumber, formatRelativeTime } from '../utils/format';

const Watch = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const load = async () => {
      setStatus('loading');
      setError('');
      try {
        const [videoData, relatedData, commentsData] = await Promise.all([
          fetchVideoById(videoId),
          fetchRelatedVideos(videoId),
          fetchComments(videoId),
        ]);
        if (active) {
          setVideo(videoData);
          setRelated(relatedData);
          setComments(commentsData);
          setStatus('ready');
        }
      } catch (err) {
        if (active) {
          setError(err.message || 'Unable to load video.');
          setStatus('error');
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [videoId]);

  if (status === 'loading') {
    return <Loader lines={6} />;
  }

  if (status === 'error') {
    return <ErrorState message={error} />;
  }

  if (!video) {
    return <EmptyState message="Video not found." />;
  }

  const { snippet, statistics } = video;
  const channelId = snippet?.channelId;

  return (
    <section className="watch-layout">
      <div>
        <div className="watch-player">
          <iframe
            title={snippet?.title || 'YouTube video player'}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="watch-info">
          <h2>{snippet?.title}</h2>
          <div className="watch-stats">
            {channelId ? (
              <Link to={`/channel/${channelId}`} className="stat-pill">
                {snippet?.channelTitle}
              </Link>
            ) : null}
            {statistics?.viewCount ? (
              <span className="stat-pill">{formatNumber(statistics.viewCount)} views</span>
            ) : null}
            {statistics?.likeCount ? (
              <span className="stat-pill">{formatNumber(statistics.likeCount)} likes</span>
            ) : null}
            {snippet?.publishedAt ? (
              <span className="stat-pill">{formatRelativeTime(snippet.publishedAt)}</span>
            ) : null}
          </div>
          <div className="watch-description">{snippet?.description || 'No description provided.'}</div>
          <div>
            <h3>Top Comments</h3>
            {comments.length === 0 ? (
              <EmptyState message="Comments are limited for this video." />
            ) : (
              <div className="comment-list">
                {comments.map((comment) => {
                  const data = comment.snippet.topLevelComment.snippet;
                  return (
                    <div key={comment.id} className="comment">
                      <h4>{data.authorDisplayName}</h4>
                      <p dangerouslySetInnerHTML={{ __html: data.textDisplay }} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="right-rail">
        <h3>Up Next</h3>
        {related.length === 0 ? (
          <EmptyState message="No related videos found." />
        ) : (
          <VideoGrid items={related} />
        )}
      </div>
    </section>
  );
};

export default Watch;
