import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchChannel, fetchChannelVideos } from '../api/youtube';
import ChannelHero from '../components/ChannelHero';
import VideoGrid from '../components/VideoGrid';
import { EmptyState, ErrorState, Loader } from '../components/StateBlocks';

const Channel = () => {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const load = async () => {
      setStatus('loading');
      setError('');
      try {
        const [channelData, videosData] = await Promise.all([
          fetchChannel(channelId),
          fetchChannelVideos(channelId),
        ]);
        if (active) {
          setChannel(channelData);
          setVideos(videosData);
          setStatus('ready');
        }
      } catch (err) {
        if (active) {
          setError(err.message || 'Unable to load channel.');
          setStatus('error');
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [channelId]);

  if (status === 'loading') {
    return <Loader lines={6} />;
  }

  if (status === 'error') {
    return <ErrorState message={error} />;
  }

  if (!channel) {
    return <EmptyState message="Channel not found." />;
  }

  return (
    <section>
      <ChannelHero channel={channel} />
      <div className="page-header">
        <div>
          <h1>Latest Uploads</h1>
          <p>Fresh from the channel.</p>
        </div>
        <span className="stat-pill">Sorted by newest</span>
      </div>
      {videos.length === 0 ? (
        <EmptyState message="No videos available." />
      ) : (
        <VideoGrid items={videos} />
      )}
    </section>
  );
};

export default Channel;
