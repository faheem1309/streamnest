import VideoCard from './VideoCard';
import { getVideoId } from '../utils/format';

const VideoGrid = ({ items }) => {
  return (
    <div className="video-grid">
      {items.map((item) => (
        <VideoCard key={getVideoId(item)} item={item} />
      ))}
    </div>
  );
};

export default VideoGrid;
