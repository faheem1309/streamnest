import { channelsById, commentsByVideoId, videos } from '../data/library';

const STOPWORDS = new Set([
  'the',
  'a',
  'an',
  'and',
  'or',
  'of',
  'to',
  'for',
  'with',
  'official',
  'video',
  'videos',
  'latest',
  'highlights',
  'stream',
  'streams',
]);

const toNumber = (value) => Number(value || 0);

const tokenize = (value) =>
  String(value || '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .filter((token) => !STOPWORDS.has(token));

const scoreVideo = (video, tokens) => {
  if (tokens.length === 0) return 0;
  const haystack = [
    video.snippet?.title,
    video.snippet?.description,
    video.snippet?.channelTitle,
    ...(video.tags || []),
  ]
    .join(' ')
    .toLowerCase();
  return tokens.reduce((score, token) => (haystack.includes(token) ? score + 1 : score), 0);
};

const sortByViews = (items) =>
  [...items].sort(
    (a, b) => toNumber(b.statistics?.viewCount) - toNumber(a.statistics?.viewCount),
  );

export const fetchMostPopular = async ({ maxResults = 24 } = {}) =>
  sortByViews(videos).slice(0, maxResults);

export const searchVideos = async ({ query, maxResults = 24 } = {}) => {
  if (!query) {
    return sortByViews(videos).slice(0, maxResults);
  }
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return sortByViews(videos).slice(0, maxResults);
  }

  return sortByViews(
    videos
      .map((video) => ({ video, score: scoreVideo(video, tokens) }))
      .filter((entry) => entry.score > 0)
      .map((entry) => entry.video),
  ).slice(0, maxResults);
};

export const fetchVideoById = async (videoId) => videos.find((video) => video.id === videoId);

export const fetchRelatedVideos = async (videoId, maxResults = 18) => {
  const current = videos.find((video) => video.id === videoId);
  if (!current) return [];

  const currentTags = new Set(current.tags || []);
  const related = videos
    .filter((video) => video.id !== videoId)
    .map((video) => {
      let score = 0;
      if (video.snippet?.channelId === current.snippet?.channelId) {
        score += 3;
      }
      (video.tags || []).forEach((tag) => {
        if (currentTags.has(tag)) score += 1;
      });
      return { video, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return toNumber(b.video.statistics?.viewCount) - toNumber(a.video.statistics?.viewCount);
    })
    .slice(0, maxResults)
    .map((entry) => entry.video);

  return related;
};

export const fetchChannel = async (channelId) => channelsById[channelId];

export const fetchChannelVideos = async (channelId, maxResults = 24) =>
  videos
    .filter((video) => video.snippet?.channelId === channelId)
    .sort((a, b) => new Date(b.snippet?.publishedAt) - new Date(a.snippet?.publishedAt))
    .slice(0, maxResults);

export const fetchComments = async (videoId, maxResults = 12) =>
  (commentsByVideoId[videoId] || []).slice(0, maxResults);
