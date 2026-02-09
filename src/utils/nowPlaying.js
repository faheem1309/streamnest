import { createContext, useContext, useMemo, useState } from 'react';

const NowPlayingContext = createContext(null);

export const NowPlayingProvider = ({ children }) => {
  const [nowPlaying, setNowPlayingState] = useState(null);

  const setNowPlaying = (video) => {
    if (!video) {
      setNowPlayingState(null);
      return;
    }
    setNowPlayingState(video);
  };

  const clearNowPlaying = () => setNowPlayingState(null);

  const value = useMemo(
    () => ({ nowPlaying, setNowPlaying, clearNowPlaying }),
    [nowPlaying],
  );

  return <NowPlayingContext.Provider value={value}>{children}</NowPlayingContext.Provider>;
};

export const useNowPlaying = () => {
  const context = useContext(NowPlayingContext);
  if (!context) {
    throw new Error('useNowPlaying must be used within a NowPlayingProvider');
  }
  return context;
};
