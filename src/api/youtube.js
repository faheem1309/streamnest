const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const DEFAULT_REGION = process.env.REACT_APP_YOUTUBE_REGION || 'US';

export const hasApiKey = () => Boolean(API_KEY);

const buildUrl = (path, params) => {
  const url = new URL(`${BASE_URL}/${path}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });
  url.searchParams.set('key', API_KEY);
  return url.toString();
};

const request = async (path, params) => {
  if (!API_KEY) {
    throw new Error('Missing REACT_APP_YOUTUBE_API_KEY. Add it to a .env file and restart the dev server.');
  }

  const response = await fetch(buildUrl(path, params));
  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || 'Unable to load YouTube data.';
    throw new Error(message);
  }

  return data;
};

export const fetchMostPopular = async ({ maxResults = 24, regionCode = DEFAULT_REGION } = {}) => {
  const data = await request('videos', {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    maxResults,
    regionCode,
  });
  return data.items || [];
};

export const searchVideos = async ({ query, maxResults = 24 } = {}) => {
  const data = await request('search', {
    part: 'snippet',
    type: 'video',
    maxResults,
    q: query,
  });
  return data.items || [];
};

export const fetchVideoById = async (videoId) => {
  const data = await request('videos', {
    part: 'snippet,contentDetails,statistics',
    id: videoId,
  });
  return data.items?.[0];
};

export const fetchRelatedVideos = async (videoId, maxResults = 18) => {
  const data = await request('search', {
    part: 'snippet',
    type: 'video',
    maxResults,
    relatedToVideoId: videoId,
  });
  return data.items || [];
};

export const fetchChannel = async (channelId) => {
  const data = await request('channels', {
    part: 'snippet,statistics',
    id: channelId,
  });
  return data.items?.[0];
};

export const fetchChannelVideos = async (channelId, maxResults = 24) => {
  const data = await request('search', {
    part: 'snippet',
    type: 'video',
    maxResults,
    channelId,
    order: 'date',
  });
  return data.items || [];
};

export const fetchComments = async (videoId, maxResults = 12) => {
  try {
    const data = await request('commentThreads', {
      part: 'snippet',
      videoId,
      maxResults,
    });
    return data.items || [];
  } catch (error) {
    if (String(error.message).toLowerCase().includes('comments')) {
      return [];
    }
    throw error;
  }
};
