const makeThumbs = (videoId) => ({
  high: {
    url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    width: 480,
    height: 360,
  },
  medium: {
    url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
    width: 320,
    height: 180,
  },
  default: {
    url: `https://i.ytimg.com/vi/${videoId}/default.jpg`,
    width: 120,
    height: 90,
  },
});

const channelList = [
  {
    id: 'channel-rick-astley',
    title: 'Rick Astley',
    description: 'Official channel for Rick Astley.',
    thumbId: 'dQw4w9WgXcQ',
    subscriberCount: '3900000',
    videoCount: '210',
  },
  {
    id: 'channel-psy',
    title: 'officialpsy',
    description: 'Official channel for PSY.',
    thumbId: '9bZkp7q19f0',
    subscriberCount: '25000000',
    videoCount: '350',
  },
  {
    id: 'channel-luis-fonsi',
    title: 'Luis Fonsi',
    description: 'Official channel for Luis Fonsi.',
    thumbId: 'kJQP7kiw5Fk',
    subscriberCount: '26000000',
    videoCount: '220',
  },
  {
    id: 'channel-ed-sheeran',
    title: 'Ed Sheeran',
    description: 'Official channel for Ed Sheeran.',
    thumbId: 'JGwWNGJdvx8',
    subscriberCount: '55000000',
    videoCount: '340',
  },
  {
    id: 'channel-adele',
    title: 'Adele',
    description: 'Official channel for Adele.',
    thumbId: 'YQHsXMglC9A',
    subscriberCount: '30000000',
    videoCount: '80',
  },
  {
    id: 'channel-taylor-swift',
    title: 'Taylor Swift',
    description: 'Official channel for Taylor Swift.',
    thumbId: 'nfWlot6h_JM',
    subscriberCount: '57000000',
    videoCount: '280',
  },
  {
    id: 'channel-mark-ronson',
    title: 'Mark Ronson',
    description: 'Official channel for Mark Ronson.',
    thumbId: 'OPf0YbXqDm0',
    subscriberCount: '4000000',
    videoCount: '160',
  },
  {
    id: 'channel-justin-bieber',
    title: 'Justin Bieber',
    description: 'Official channel for Justin Bieber.',
    thumbId: 'fRh_vgS2dFE',
    subscriberCount: '72000000',
    videoCount: '250',
  },
  {
    id: 'channel-katy-perry',
    title: 'Katy Perry',
    description: 'Official channel for Katy Perry.',
    thumbId: 'CevxZvSJLk8',
    subscriberCount: '56000000',
    videoCount: '220',
  },
  {
    id: 'channel-maroon-5',
    title: 'Maroon 5',
    description: 'Official channel for Maroon 5.',
    thumbId: '09R8_2nJtjg',
    subscriberCount: '37000000',
    videoCount: '210',
  },
  {
    id: 'channel-shakira',
    title: 'Shakira',
    description: 'Official channel for Shakira.',
    thumbId: 'pRpeEdMmmQ0',
    subscriberCount: '39000000',
    videoCount: '260',
  },
  {
    id: 'channel-alan-walker',
    title: 'Alan Walker',
    description: 'Official channel for Alan Walker.',
    thumbId: '60ItHLz5WEA',
    subscriberCount: '45000000',
    videoCount: '190',
  },
  {
    id: 'channel-ted',
    title: 'TED',
    description: 'Ideas worth spreading.',
    thumbId: 'iG9CE55wbtY',
    subscriberCount: '24000000',
    videoCount: '5200',
  },
  {
    id: 'channel-jawed',
    title: 'jawed',
    description: 'Videos from Jawed Karim.',
    thumbId: 'jNQXAC9IVRw',
    subscriberCount: '5300000',
    videoCount: '3',
  },
  {
    id: 'channel-hdcyt',
    title: 'HDCYT',
    description: 'Classic viral clips.',
    thumbId: '_OBlgSz8sSM',
    subscriberCount: '950000',
    videoCount: '30',
  },
  {
    id: 'channel-ok-go',
    title: 'OK Go',
    description: 'Official OK Go channel.',
    thumbId: 'dTAAsCNK7RA',
    subscriberCount: '4600000',
    videoCount: '140',
  },
  {
    id: 'channel-spacex',
    title: 'SpaceX',
    description: 'Official SpaceX channel.',
    thumbId: 'wD1O_hz3By4',
    subscriberCount: '7200000',
    videoCount: '300',
  },
  {
    id: 'channel-nasa',
    title: 'NASA',
    description: 'Official NASA channel.',
    thumbId: '21X5lGlDOfg',
    subscriberCount: '11000000',
    videoCount: '2800',
  },
  {
    id: 'channel-rockstar-games',
    title: 'Rockstar Games',
    description: 'Official Rockstar Games channel.',
    thumbId: 'QkkoHAzjnUs',
    subscriberCount: '8800000',
    videoCount: '600',
  },
  {
    id: 'channel-nyan-cat',
    title: 'Nyan Cat',
    description: 'The original Nyan Cat upload.',
    thumbId: 'QH2-TGUlwu4',
    subscriberCount: '320000',
    videoCount: '12',
  },
];

export const channelsById = channelList.reduce((acc, channel) => {
  acc[channel.id] = {
    id: channel.id,
    snippet: {
      title: channel.title,
      description: channel.description,
      thumbnails: {
        high: {
          url: `https://i.ytimg.com/vi/${channel.thumbId}/hqdefault.jpg`,
          width: 480,
          height: 360,
        },
      },
    },
    statistics: {
      subscriberCount: channel.subscriberCount,
      videoCount: channel.videoCount,
    },
  };
  return acc;
}, {});

export const videos = [
  {
    id: 'dQw4w9WgXcQ',
    snippet: {
      title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      description: 'The classic 80s hit that never goes out of style.',
      channelId: 'channel-rick-astley',
      channelTitle: 'Rick Astley',
      publishedAt: '2009-10-25T07:57:33Z',
      thumbnails: makeThumbs('dQw4w9WgXcQ'),
    },
    contentDetails: { duration: 'PT3M33S' },
    statistics: { viewCount: '1600000000', likeCount: '16000000' },
    tags: ['music', 'pop', 'classic', '80s'],
  },
  {
    id: '9bZkp7q19f0',
    snippet: {
      title: 'PSY - GANGNAM STYLE (Official Video)',
      description: 'A global K-pop phenomenon with iconic choreography.',
      channelId: 'channel-psy',
      channelTitle: 'officialpsy',
      publishedAt: '2012-07-15T09:00:00Z',
      thumbnails: makeThumbs('9bZkp7q19f0'),
    },
    contentDetails: { duration: 'PT4M13S' },
    statistics: { viewCount: '5000000000', likeCount: '25000000' },
    tags: ['music', 'pop', 'dance', 'k-pop'],
  },
  {
    id: 'kJQP7kiw5Fk',
    snippet: {
      title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
      description: 'Massive Latin pop hit with a summer vibe.',
      channelId: 'channel-luis-fonsi',
      channelTitle: 'Luis Fonsi',
      publishedAt: '2017-01-12T05:00:00Z',
      thumbnails: makeThumbs('kJQP7kiw5Fk'),
    },
    contentDetails: { duration: 'PT4M42S' },
    statistics: { viewCount: '8200000000', likeCount: '45000000' },
    tags: ['music', 'latin', 'pop'],
  },
  {
    id: 'JGwWNGJdvx8',
    snippet: {
      title: 'Ed Sheeran - Shape of You (Official Music Video)',
      description: 'One of the biggest pop tracks of the decade.',
      channelId: 'channel-ed-sheeran',
      channelTitle: 'Ed Sheeran',
      publishedAt: '2017-01-30T13:00:00Z',
      thumbnails: makeThumbs('JGwWNGJdvx8'),
    },
    contentDetails: { duration: 'PT4M24S' },
    statistics: { viewCount: '6200000000', likeCount: '33000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'YQHsXMglC9A',
    snippet: {
      title: 'Adele - Hello',
      description: 'Adele returns with a powerful ballad.',
      channelId: 'channel-adele',
      channelTitle: 'Adele',
      publishedAt: '2015-10-23T05:00:00Z',
      thumbnails: makeThumbs('YQHsXMglC9A'),
    },
    contentDetails: { duration: 'PT6M07S' },
    statistics: { viewCount: '3100000000', likeCount: '16000000' },
    tags: ['music', 'pop', 'ballad'],
  },
  {
    id: 'nfWlot6h_JM',
    snippet: {
      title: 'Taylor Swift - Shake It Off',
      description: 'Upbeat pop anthem from Taylor Swift.',
      channelId: 'channel-taylor-swift',
      channelTitle: 'Taylor Swift',
      publishedAt: '2014-08-18T15:00:00Z',
      thumbnails: makeThumbs('nfWlot6h_JM'),
    },
    contentDetails: { duration: 'PT4M02S' },
    statistics: { viewCount: '3400000000', likeCount: '21000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'OPf0YbXqDm0',
    snippet: {
      title: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars',
      description: 'Funk-driven chart topper with retro flair.',
      channelId: 'channel-mark-ronson',
      channelTitle: 'Mark Ronson',
      publishedAt: '2014-11-19T06:00:00Z',
      thumbnails: makeThumbs('OPf0YbXqDm0'),
    },
    contentDetails: { duration: 'PT4M31S' },
    statistics: { viewCount: '5200000000', likeCount: '25000000' },
    tags: ['music', 'funk', 'pop'],
  },
  {
    id: 'fRh_vgS2dFE',
    snippet: {
      title: 'Justin Bieber - Sorry (PURPOSE : The Movement)',
      description: 'Dance-focused visual for a pop hit.',
      channelId: 'channel-justin-bieber',
      channelTitle: 'Justin Bieber',
      publishedAt: '2015-10-22T00:00:00Z',
      thumbnails: makeThumbs('fRh_vgS2dFE'),
    },
    contentDetails: { duration: 'PT3M26S' },
    statistics: { viewCount: '3800000000', likeCount: '17000000' },
    tags: ['music', 'pop', 'dance'],
  },
  {
    id: 'CevxZvSJLk8',
    snippet: {
      title: 'Katy Perry - Roar (Official)',
      description: 'High-energy pop anthem with bold visuals.',
      channelId: 'channel-katy-perry',
      channelTitle: 'Katy Perry',
      publishedAt: '2013-09-05T04:00:00Z',
      thumbnails: makeThumbs('CevxZvSJLk8'),
    },
    contentDetails: { duration: 'PT4M30S' },
    statistics: { viewCount: '3900000000', likeCount: '17000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'tVj0ZTS4WF4',
    snippet: {
      title: 'Katy Perry - Dark Horse (Official) ft. Juicy J',
      description: 'Epic pop production with cinematic styling.',
      channelId: 'channel-katy-perry',
      channelTitle: 'Katy Perry',
      publishedAt: '2014-02-20T05:00:00Z',
      thumbnails: makeThumbs('tVj0ZTS4WF4'),
    },
    contentDetails: { duration: 'PT3M50S' },
    statistics: { viewCount: '3600000000', likeCount: '16000000' },
    tags: ['music', 'pop'],
  },
  {
    id: '09R8_2nJtjg',
    snippet: {
      title: 'Maroon 5 - Sugar',
      description: 'A surprise wedding crash with a pop hook.',
      channelId: 'channel-maroon-5',
      channelTitle: 'Maroon 5',
      publishedAt: '2015-01-14T05:00:00Z',
      thumbnails: makeThumbs('09R8_2nJtjg'),
    },
    contentDetails: { duration: 'PT5M01S' },
    statistics: { viewCount: '3900000000', likeCount: '15000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'pRpeEdMmmQ0',
    snippet: {
      title: 'Shakira - Waka Waka (This Time for Africa) (Official 2010 FIFA World Cup Song)',
      description: 'World Cup anthem with global energy.',
      channelId: 'channel-shakira',
      channelTitle: 'Shakira',
      publishedAt: '2010-06-04T07:00:00Z',
      thumbnails: makeThumbs('pRpeEdMmmQ0'),
    },
    contentDetails: { duration: 'PT3M34S' },
    statistics: { viewCount: '3600000000', likeCount: '15000000' },
    tags: ['music', 'sports', 'worldcup'],
  },
  {
    id: '60ItHLz5WEA',
    snippet: {
      title: 'Alan Walker - Faded',
      description: 'Electronic hit with a cinematic story.',
      channelId: 'channel-alan-walker',
      channelTitle: 'Alan Walker',
      publishedAt: '2015-12-03T12:00:00Z',
      thumbnails: makeThumbs('60ItHLz5WEA'),
    },
    contentDetails: { duration: 'PT3M32S' },
    statistics: { viewCount: '3500000000', likeCount: '27000000' },
    tags: ['music', 'electronic'],
  },
  {
    id: '2Vv-BfVoq4g',
    snippet: {
      title: 'Ed Sheeran - Perfect (Official Music Video)',
      description: 'A romantic ballad from Ed Sheeran.',
      channelId: 'channel-ed-sheeran',
      channelTitle: 'Ed Sheeran',
      publishedAt: '2017-11-09T12:00:00Z',
      thumbnails: makeThumbs('2Vv-BfVoq4g'),
    },
    contentDetails: { duration: 'PT4M40S' },
    statistics: { viewCount: '3900000000', likeCount: '22000000' },
    tags: ['music', 'ballad'],
  },
  {
    id: 'iG9CE55wbtY',
    snippet: {
      title: 'Do schools kill creativity? | Sir Ken Robinson',
      description: 'A classic TED talk about creativity and education.',
      channelId: 'channel-ted',
      channelTitle: 'TED',
      publishedAt: '2007-01-07T00:00:00Z',
      thumbnails: makeThumbs('iG9CE55wbtY'),
    },
    contentDetails: { duration: 'PT19M24S' },
    statistics: { viewCount: '78000000', likeCount: '1800000' },
    tags: ['talks', 'podcast', 'design', 'education'],
  },
  {
    id: 'qp0HIF3SfI4',
    snippet: {
      title: 'How great leaders inspire action | Simon Sinek',
      description: 'Leadership and purpose explained through the Golden Circle.',
      channelId: 'channel-ted',
      channelTitle: 'TED',
      publishedAt: '2009-09-29T00:00:00Z',
      thumbnails: makeThumbs('qp0HIF3SfI4'),
    },
    contentDetails: { duration: 'PT18M07S' },
    statistics: { viewCount: '68000000', likeCount: '1600000' },
    tags: ['talks', 'podcast', 'leadership', 'business'],
  },
  {
    id: 'Ks-_Mh1QhMc',
    snippet: {
      title: 'Your body language may shape who you are | Amy Cuddy',
      description: 'A talk on presence and confidence.',
      channelId: 'channel-ted',
      channelTitle: 'TED',
      publishedAt: '2012-10-01T00:00:00Z',
      thumbnails: makeThumbs('Ks-_Mh1QhMc'),
    },
    contentDetails: { duration: 'PT21M02S' },
    statistics: { viewCount: '72000000', likeCount: '1500000' },
    tags: ['talks', 'podcast', 'psychology'],
  },
  {
    id: 'jNQXAC9IVRw',
    snippet: {
      title: 'Me at the zoo',
      description: 'The very first video uploaded to YouTube.',
      channelId: 'channel-jawed',
      channelTitle: 'jawed',
      publishedAt: '2005-04-23T00:00:00Z',
      thumbnails: makeThumbs('jNQXAC9IVRw'),
    },
    contentDetails: { duration: 'PT19S' },
    statistics: { viewCount: '310000000', likeCount: '15000000' },
    tags: ['classic', 'history', 'viral'],
  },
  {
    id: '_OBlgSz8sSM',
    snippet: {
      title: 'Charlie bit my finger - again!',
      description: 'A classic viral family moment.',
      channelId: 'channel-hdcyt',
      channelTitle: 'HDCYT',
      publishedAt: '2007-05-22T00:00:00Z',
      thumbnails: makeThumbs('_OBlgSz8sSM'),
    },
    contentDetails: { duration: 'PT56S' },
    statistics: { viewCount: '880000000', likeCount: '3400000' },
    tags: ['classic', 'viral', 'comedy'],
  },
  {
    id: 'dTAAsCNK7RA',
    snippet: {
      title: 'OK Go - Here It Goes Again',
      description: 'The treadmill music video that set a new bar for creativity.',
      channelId: 'channel-ok-go',
      channelTitle: 'OK Go',
      publishedAt: '2006-02-12T00:00:00Z',
      thumbnails: makeThumbs('dTAAsCNK7RA'),
    },
    contentDetails: { duration: 'PT3M01S' },
    statistics: { viewCount: '64000000', likeCount: '800000' },
    tags: ['music', 'design', 'creative'],
  },
  {
    id: 'wD1O_hz3By4',
    snippet: {
      title: 'SpaceX Falcon Heavy Test Flight',
      description: 'A landmark moment in commercial spaceflight.',
      channelId: 'channel-spacex',
      channelTitle: 'SpaceX',
      publishedAt: '2018-02-06T00:00:00Z',
      thumbnails: makeThumbs('wD1O_hz3By4'),
    },
    contentDetails: { duration: 'PT33M41S' },
    statistics: { viewCount: '58000000', likeCount: '1200000' },
    tags: ['tech', 'technology', 'space', 'news'],
  },
  {
    id: '21X5lGlDOfg',
    snippet: {
      title: 'NASA Live: Official Stream of NASA TV',
      description: '24/7 coverage of NASA missions, events, and space views.',
      channelId: 'channel-nasa',
      channelTitle: 'NASA',
      publishedAt: '2015-05-19T00:00:00Z',
      thumbnails: makeThumbs('21X5lGlDOfg'),
    },
    contentDetails: { duration: 'PT10H00M00S' },
    statistics: { viewCount: '110000000', likeCount: '900000' },
    tags: ['live', 'space', 'news', 'tech', 'technology'],
  },
  {
    id: 'QkkoHAzjnUs',
    snippet: {
      title: 'Grand Theft Auto V Trailer',
      description: 'The official reveal trailer for GTA V.',
      channelId: 'channel-rockstar-games',
      channelTitle: 'Rockstar Games',
      publishedAt: '2011-11-02T00:00:00Z',
      thumbnails: makeThumbs('QkkoHAzjnUs'),
    },
    contentDetails: { duration: 'PT1M31S' },
    statistics: { viewCount: '98000000', likeCount: '1400000' },
    tags: ['gaming', 'trailer', 'action'],
  },
  {
    id: 'QH2-TGUlwu4',
    snippet: {
      title: 'Nyan Cat [original]',
      description: 'A classic internet animation with an unforgettable tune.',
      channelId: 'channel-nyan-cat',
      channelTitle: 'Nyan Cat',
      publishedAt: '2011-04-05T00:00:00Z',
      thumbnails: makeThumbs('QH2-TGUlwu4'),
    },
    contentDetails: { duration: 'PT3M37S' },
    statistics: { viewCount: '230000000', likeCount: '2100000' },
    tags: ['classic', 'animation', 'music'],
  },
];

export const commentsByVideoId = {
  dQw4w9WgXcQ: [
    {
      id: 'rick-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Maya T.',
            textDisplay: 'Still a classic after all these years.',
          },
        },
      },
    },
    {
      id: 'rick-2',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Jordan L.',
            textDisplay: 'This song never leaves my playlist.',
          },
        },
      },
    },
  ],
  kJQP7kiw5Fk: [
    {
      id: 'des-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Isabella R.',
            textDisplay: 'Instant summer vibes.',
          },
        },
      },
    },
  ],
  iG9CE55wbtY: [
    {
      id: 'ted-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Ari S.',
            textDisplay: 'Still one of the most inspiring talks.',
          },
        },
      },
    },
    {
      id: 'ted-2',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Priya M.',
            textDisplay: 'A reminder to keep creativity alive.',
          },
        },
      },
    },
  ],
  wD1O_hz3By4: [
    {
      id: 'spx-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Cole D.',
            textDisplay: 'The dual booster landing still gives me chills.',
          },
        },
      },
    },
  ],
  QkkoHAzjnUs: [
    {
      id: 'gta-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Riley K.',
            textDisplay: 'Iconic trailer. Set the tone perfectly.',
          },
        },
      },
    },
  ],
  '21X5lGlDOfg': [
    {
      id: 'nasa-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Elena V.',
            textDisplay: 'Love leaving this stream on while working.',
          },
        },
      },
    },
  ],
};
